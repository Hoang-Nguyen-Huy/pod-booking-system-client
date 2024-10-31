import { Edit } from '@mui/icons-material'
import { IconButton, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ACTION } from '~/constants/mock'
import { Amenity } from '~/constants/type'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid2'
import { useCreateAmenityMutation, useEditAmenityMutation } from '~/queries/useAmenity'
import { AmenityTypeEnum, CreateAmenityBodyType, EditAmenityBodyType } from '~/schemaValidations/amenity.schema'
import { handleErrorApi } from '~/utils/utils'
import { toast } from 'react-toastify'
import buildingApiRequest from '~/apis/building'
import { useAppContext } from '~/contexts/AppProvider'

interface AmenityFormData {
  name: string
  price: number
  quantity: number
}

export default function BuildingModal({ row, action }: { row?: Amenity; action: string }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(row?.type || AmenityTypeEnum.Food)
  const [formErrors, setFormErrors] = useState({ name: '', price: '', quantity: '' })
  const [buildings, setBuildings] = useState<{ id: number; address: string }[]>([])
  const [selectedBuildingId, setSelectedBuildingId] = useState<string>('') // New state for buildingId
  const createAmenity = useCreateAmenityMutation()
  const editAmenityMutation = useEditAmenityMutation()
  const { account: account } = useAppContext()

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as AmenityTypeEnum)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setFormErrors({ name: '', price: '', quantity: '' })
    setSelectedBuildingId('')
  }

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const response = await buildingApiRequest.getAllBuilding()
        setBuildings(response.data.data)
      } catch (error) {
        console.error('Failed to fetch buildings:', error)
      }
    }

    if (open) {
      fetchBuildings()
    }
  }, [open])

  // Validation helper
  const validateForm = (data: AmenityFormData) => {
    const errors = { name: '', price: '', quantity: '' }
    let isValid = true

    if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
      errors.name = 'Name is required and must be a valid string'
      isValid = false
    }

    if (!data.price || isNaN(data.price) || data.price <= 0) {
      errors.price = 'Price must be a valid number greater than 0'
      isValid = false
    }

    if (data.quantity == null || isNaN(data.quantity) || data.quantity < 0) {
      errors.quantity = 'Quantity must be a valid number and cannot be negative'
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (createAmenity.isPending || editAmenityMutation.isPending) return

    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries(formData.entries()) as unknown as CreateAmenityBodyType | EditAmenityBodyType

    console.log('Form Data:', formJson) // Log the form data

    if (!validateForm(formJson)) {
      console.log('Validation Errors:', formErrors) // Log validation errors if present
      return
    }

    const payload = {
      ...row,
      ...formJson,
      type
    }

    try {
      const result =
        action === ACTION.CREATE
          ? await createAmenity.mutateAsync(payload as CreateAmenityBodyType)
          : await editAmenityMutation.mutateAsync(payload as EditAmenityBodyType)

      toast.success(result.data.message, { autoClose: 3000 })
      handleClose()
    } catch (error) {
      handleErrorApi({ error })
    }
  }

  return (
    <>
      {action === ACTION.UPDATE ? (
        <IconButton onClick={handleClickOpen}>
          <Edit />
        </IconButton>
      ) : (
        <Button color='primary' startIcon={<AddIcon />} onClick={handleClickOpen}>
          Thêm dịch vụ
        </Button>
      )}
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit
        }}
      >
        <DialogTitle sx={{ fontSize: '20px', fontWeight: '500' }}>
          {action === ACTION.CREATE ? 'Tạo dịch vụ' : 'Chỉnh sửa dịch vụ'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent='center' justifyContent='center'>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Dịch vụ</Typography>
            </Grid>
            <Grid size={9}>
              <TextField
                fullWidth
                size='small'
                name='name'
                defaultValue={row?.name}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent='center' justifyContent='center'>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Giá</Typography>
            </Grid>
            <Grid size={9}>
              <TextField
                fullWidth
                size='small'
                name='price'
                defaultValue={row?.price}
                type='number'
                error={!!formErrors.price}
                helperText={formErrors.price}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent='center' justifyContent='center'>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'start' }}>
              <Typography>Số lượng</Typography>
            </Grid>
            <Grid size={9}>
              <TextField
                fullWidth
                size='small'
                name='quantity'
                type='number'
                inputProps={{ min: 1 }}
                defaultValue={row?.quantity}
                error={!!formErrors.quantity}
                helperText={formErrors.quantity}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent='center' justifyContent='center'>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Loại dịch vụ</Typography>
            </Grid>
            <Grid size={9}>
              <Select name='type' fullWidth size='small' value={type} onChange={handleChange}>
                {Object.values(AmenityTypeEnum).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent='center' justifyContent='center'>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Chi nhánh</Typography>
            </Grid>
            <Grid size={9}>
              {account?.role === 'Admin' ? (
                <Select
                  name='buildingId'
                  fullWidth
                  size='small'
                  value={selectedBuildingId}
                  onChange={(e) => setSelectedBuildingId(e.target.value)}
                  disabled={action === ACTION.UPDATE} // Disable if updating
                >
                  {buildings.map((building) => (
                    <MenuItem key={building.id} value={building.id}>
                      {building.address}
                    </MenuItem>
                  ))}
                </Select>
              ) : (
                <Select
                  name='buildingId'
                  fullWidth
                  size='small'
                  value={buildings.find((building) => building.id === account?.buildingNumber)?.id || ''}
                  disabled
                >
                  {buildings
                    .filter((building) => building.id === account?.buildingNumber)
                    .map((building) => (
                      <MenuItem key={building.id} value={building.id}>
                        {building.address}
                      </MenuItem>
                    ))}
                </Select>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'grey.900', borderRadius: '12px' }}>
            Hủy
          </Button>
          <Button
            size='medium'
            type='submit'
            variant='contained'
            sx={{ backgroundColor: 'grey.900', borderRadius: '12px' }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
