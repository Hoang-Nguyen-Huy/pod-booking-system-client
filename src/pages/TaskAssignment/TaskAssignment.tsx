import { useState, useMemo, useEffect } from 'react'
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  DialogContentText
} from '@mui/material'
import { Add } from '@mui/icons-material'
import Grid from '@mui/material/Grid2'
import { useCreateAssignment, useDeleteAssignment, useGetAllAssignment } from '~/queries/useAssignment'
import { StyledHeader } from '~/pages/TaskAssignment/StyledHeader'
import { StyledDayHeader } from '~/pages/TaskAssignment/StyledDayHeader'
import { StyledPaper } from '~/pages/TaskAssignment/StyledPaper'
import { StyledTimeSlot } from '~/pages/TaskAssignment/StyledTimeSlot'
import { useGetListStaff } from '~/queries/useAccount'
import { Controller, useForm } from 'react-hook-form'
import { CreateAssignmentBody, CreateAssignmentBodyType } from '~/schemaValidations/assignment.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleErrorApi } from '~/utils/utils'
import { toast } from 'react-toastify'
import { useAppContext } from '~/contexts/AppProvider'

const timeSlots = [
  '07:00 - 09:00',
  '09:00 - 11:00',
  '11:00 - 13:00',
  '13:00 - 15:00',
  '15:00 - 17:00',
  '17:00 - 19:00',
  '19:00 - 21:00'
]
const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

const chipColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#FFB74D',
  '#7986CB',
  '#AED581',
  '#FFD54F',
  '#F06292',
  '#4DB6AC',
  '#BA68C8',
  '#A7C7E7'
]

type Shift = {
  [key: string]: { id: string; name: string }[]
}

export default function TaskAssignment() {
  const { data } = useGetAllAssignment()
  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm<CreateAssignmentBodyType>({
    resolver: zodResolver(CreateAssignmentBody),
    defaultValues: {
      staffId: '',
      slot: '',
      weekDate: ''
    }
  })
  const { data: staffs } = useGetListStaff({ slot: watch('slot'), weekDate: watch('weekDate') })
  const createAssignmentMutation = useCreateAssignment()
  const [events, setEvents] = useState<Shift>({})
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const deleteAssignmentMutation = useDeleteAssignment()
  const [staff, setStaff] = useState<{ id: string; name: string }>()
  const staffColors = useMemo(() => {
    const colorMap = new Map()
    const allStaffNames = Array.from(
      new Set(
        Object.values(events)
          .flat()
          .map((event) => event.name)
      )
    )

    allStaffNames.forEach((staffName, index) => {
      colorMap.set(staffName, chipColors[index % chipColors.length])
    })

    return colorMap
  }, [events])
  const [hoveredChip, setHoveredChip] = useState<string | null>(null)
  const { account } = useAppContext()

  useEffect(() => {
    if (data) {
      const shift = data.data.data.reduce((acc, item) => {
        const key = `${item.weekDate}-${item.slot}`
        const staff = { id: item.id, name: item.nameStaff }

        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(staff)

        return acc
      }, {} as Shift)

      setEvents(shift)
    }
  }, [data])
  console.log(events)
  const handleAddEvent = (day: string, timeSlot: string) => {
    setValue('slot', timeSlot || '')
    setValue('weekDate', day || '')
    setIsAddEventOpen(true)
  }

  const handleSaveEvent = handleSubmit(async (data) => {
    if (createAssignmentMutation.isPending) return
    try {
      await createAssignmentMutation.mutateAsync(data)
      toast.success('Thêm nhân viên vào ca trực thành công')
      setValue('staffId', '')
      setValue('slot', '')
      setValue('weekDate', '')
      setIsAddEventOpen(false)
    } catch (error) {
      handleErrorApi({ error })
    }
  })

  const handleClose = () => {
    setValue('staffId', '')
    setValue('slot', '')
    setValue('weekDate', '')
    setIsAddEventOpen(false)
  }

  const handleOpenDialog = (assignment: { id: string; name: string }) => {
    setStaff(assignment)
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const handleDeleteAssignment = async () => {
    if (deleteAssignmentMutation.isPending) return
    try {
      await deleteAssignmentMutation.mutateAsync({ id: staff?.id as string })
      toast.success('Đã xóa nhân viên khỏi ca trực')
      setOpen(false)
    } catch (error) {
      handleErrorApi({ error })
    }
  }
  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: 'auto',
        p: 3,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 2,
        backgroundColor: '#f5f5f5'
      }}
    >
      <StyledHeader>
        <Typography variant='h4' fontWeight='500'>
          Ca trực của nhân viên
        </Typography>
      </StyledHeader>
      <Grid container>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>Xóa nhân viên</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Bạn có muốn xóa nhân viên{' '}
              <Chip
                label={staff?.name}
                size='small'
                style={{
                  backgroundColor: staffColors.get(staff?.name),
                  color: 'white',
                  margin: '2px',
                  fontWeight: 'bold'
                }}
              />{' '}
              khỏi ca trực
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Hủy</Button>
            <Button variant='contained' color='error' onClick={handleDeleteAssignment} autoFocus>
              Xóa
            </Button>
          </DialogActions>
        </Dialog>
        <Grid size={{ xs: 1.5 }}>
          <Box sx={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button startIcon={<Add />} onClick={() => setIsAddEventOpen(true)} disabled={account?.role !== 'Manager'}>
              Thêm nhân viên
            </Button>
          </Box>
          {timeSlots.map((slot, index) => (
            <StyledTimeSlot key={index}>
              <Typography variant='body1' fontWeight='medium'>
                {slot}
              </Typography>
            </StyledTimeSlot>
          ))}
        </Grid>
        {weekDays.map((day) => (
          <Grid size={{ xs: 1.5 }} key={day}>
            <StyledDayHeader>
              <Typography variant='body1'>{day}</Typography>
            </StyledDayHeader>
            {timeSlots.map((slot) => (
              <StyledPaper key={`${day}-${slot}`}>
                {events[`${day}-${slot}`]?.map((event) => (
                  <div
                    key={event.id}
                    onMouseEnter={() => setHoveredChip(event.id)}
                    onMouseLeave={() => setHoveredChip(null)}
                    style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}
                  >
                    <Chip
                      key={event.id}
                      label={event.name}
                      size='small'
                      style={{
                        backgroundColor: staffColors.get(event.name),
                        color: 'white',
                        margin: '2px',
                        fontWeight: 'bold'
                      }}
                    />
                    {hoveredChip === event.id && (
                      <IconButton
                        size='small'
                        aria-label='remove'
                        onClick={() => handleOpenDialog(event)}
                        sx={{
                          height: 20,
                          position: 'absolute',
                          right: -1,
                          top: 5,
                          backgroundColor: 'grey.200',
                          borderRadius: '50%',
                          '&:hover': {
                            backgroundColor: 'grey.200'
                          }
                        }}
                      >
                        x
                      </IconButton>
                    )}
                  </div>
                ))}
                <IconButton
                  size='small'
                  className='add-event'
                  disabled={account?.role !== 'Manager' || events[`${day}-${slot}`]?.length > 0}
                  onClick={() => handleAddEvent(day, slot)}
                  sx={{
                    position: 'absolute',
                    right: 2,
                    bottom: 2,
                    opacity: 0,
                    transition: 'opacity 0.2s'
                  }}
                >
                  <Add fontSize='small' />
                </IconButton>
              </StyledPaper>
            ))}
          </Grid>
        ))}
      </Grid>
      <Dialog
        sx={{ '& .MuiPaper-root': { width: 350 } }}
        open={isAddEventOpen}
        onClose={() => setIsAddEventOpen(false)}
      >
        <DialogTitle>Thêm nhân viên</DialogTitle>
        <DialogContent>
          <Box component='form'>
            <FormControl fullWidth sx={{ my: 2 }}>
              <InputLabel size='small' id='time-slot-label'>
                Ngày trực
              </InputLabel>
              <Controller
                control={control}
                name='weekDate'
                render={({ field }) => (
                  <>
                    <Select size='small' labelId='time-slot-label' {...field} label='Ngày trực'>
                      <MenuItem value='T2'>Thứ 2</MenuItem>
                      <MenuItem value='T3'>Thứ 3</MenuItem>
                      <MenuItem value='T4'>Thứ 4</MenuItem>
                      <MenuItem value='T5'>Thứ 5</MenuItem>
                      <MenuItem value='T6'>Thứ 6</MenuItem>
                      <MenuItem value='T7'>Thứ 7</MenuItem>
                      <MenuItem value='CN'>Chủ nhật</MenuItem>
                    </Select>
                    {errors.weekDate && <FormHelperText error>{errors.weekDate?.message || ''}</FormHelperText>}
                  </>
                )}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 2 }}>
              <InputLabel size='small' id='time-slot-label'>
                Khung giờ
              </InputLabel>
              <Controller
                control={control}
                name='slot'
                render={({ field }) => (
                  <>
                    <Select size='small' labelId='time-slot-label' {...field} label='Khung giờ'>
                      <MenuItem value='07:00 - 09:00'>7h - 9h</MenuItem>
                      <MenuItem value='09:00 - 11:00'>9h - 11h</MenuItem>
                      <MenuItem value='11:00 - 13:00'>11h - 13h</MenuItem>
                      <MenuItem value='13:00 - 15:00'>13h - 15h</MenuItem>
                      <MenuItem value='15:00 - 17:00'>15h - 17h</MenuItem>
                      <MenuItem value='17:00 - 19:00'>17h - 19h</MenuItem>
                      <MenuItem value='19:00 - 21:00'>19h - 21h</MenuItem>
                    </Select>
                    {errors.slot && <FormHelperText error>{errors.slot?.message || ''}</FormHelperText>}
                  </>
                )}
              />
            </FormControl>
            {watch('slot') && watch('weekDate') && (
              <FormControl fullWidth sx={{ my: 2 }}>
                <InputLabel size='small' id='time-slot-label'>
                  Nhân viên
                </InputLabel>
                <Controller
                  control={control}
                  name='staffId'
                  render={({ field }) => (
                    <>
                      <Select size='small' labelId='time-slot-label' label='Nhân viên' {...field}>
                        {staffs?.data.data.map((staff) => (
                          <MenuItem key={staff.id} value={staff.id}>
                            {staff.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.staffId && <FormHelperText error>{errors.staffId?.message || ''}</FormHelperText>}
                    </>
                  )}
                />
              </FormControl>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleSaveEvent} variant='contained'>
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
