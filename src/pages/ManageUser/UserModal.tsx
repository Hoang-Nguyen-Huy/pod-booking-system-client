import Edit from '@mui/icons-material/Edit'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import React, { useState } from 'react'
import { AccountRole } from '~/constants/type'
import { useCreateAccountMutation, useUpdateAccountByAdmin } from '~/queries/useAccount'
import AddIcon from '@mui/icons-material/Add'
import {
  AccountSchemaType,
  CreateAccountBody,
  CreateAccountBodyType,
  UpdateAccountByAdminBody
} from '~/schemaValidations/account.schema'
import { toast } from 'react-toastify'
import { handleErrorApi } from '~/utils/utils'
import { ACTION } from '~/constants/mock'
import BackdropCustom from '~/components/Progress/Backdrop'
import { z } from 'zod'

const UserModal = ({ row, refetch, action }: { row: AccountSchemaType; refetch: () => void; action: string }) => {
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState(ACTION.CREATE ? AccountRole.Customer.toString() : row?.role)
  const [status, setStatus] = useState<number>(ACTION.CREATE ? 1 : row?.status) // Default to active (1)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const createAccount = useCreateAccountMutation()
  const updateAccount = useUpdateAccountByAdmin()

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string)
  }

  const handleStatusChange = (event: SelectChangeEvent<number>) => {
    setStatus(event.target.value as number)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const validateForm = (data: unknown): boolean => {
    let validationSchema
    if (action === ACTION.CREATE) {
      validationSchema = CreateAccountBody
    } else {
      validationSchema = UpdateAccountByAdminBody
    }

    try {
      validationSchema.parse(data)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {}
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (createAccount.isPending) return

    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries(formData.entries()) as unknown as CreateAccountBodyType
    const payLoadCreate = {
      ...formJson,
      role: role,
      status: status
    }
    const payLoadUpdate = {
      ...row,
      role: role,
      status: status
    }
    try {
      let result
      if (action === ACTION.UPDATE) {
        if (!validateForm(payLoadUpdate)) {
          return
        }
        result = await updateAccount.mutateAsync(payLoadUpdate)
      } else if (action === ACTION.CREATE) {
        if (!validateForm(payLoadCreate)) {
          return
        }
        result = await createAccount.mutateAsync(payLoadCreate)
      }
      toast.success(result?.data.message, {
        autoClose: 3000
      })
      refetch()
    } catch (error) {
      handleErrorApi({ error })
    }
    handleClose()
  }

  return (
    <>
      {action === ACTION.UPDATE ? (
        <IconButton onClick={handleClickOpen}>
          <Edit />
        </IconButton>
      ) : (
        <Button color='primary' startIcon={<AddIcon />} onClick={handleClickOpen}>
          Thêm tài khoản
        </Button>
      )}
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            position: 'relative'
          },
          component: 'form',
          onSubmit: handleSubmit
        }}
      >
        <BackdropCustom loading={updateAccount.isPending} />
        <DialogTitle>{action === ACTION.CREATE ? 'Tạo tài khoản' : 'Chỉnh sửa tài khoản của ' + row?.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Tên</Typography>
            </Grid>
            <Grid size={9}>
              <TextField
                fullWidth
                type='text'
                size='small'
                name='name'
                defaultValue={row?.name}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
          </Grid>
          {ACTION.CREATE === action ? (
            <>
              <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
                <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Email</Typography>
                </Grid>
                <Grid size={9}>
                  <TextField
                    type='email'
                    fullWidth
                    size='small'
                    name='email'
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
                <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Mật khẩu</Typography>
                </Grid>
                <Grid size={9}>
                  <TextField
                    type='password'
                    fullWidth
                    size='small'
                    name='password'
                    error={!!errors.password}
                    helperText={errors.password}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
                <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Số tòa nhà</Typography>
                </Grid>
                <Grid size={9}>
                  <TextField
                    type='number'
                    fullWidth
                    size='small'
                    name='buildingNumber'
                    defaultValue={row?.buildingNumber}
                    error={!!errors.buildingNumber}
                    helperText={errors.buildingNumber}
                  />
                </Grid>
              </Grid>
            </>
          )}
          <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Vai trò</Typography>
            </Grid>
            <Grid size={9}>
              <Select name='role' fullWidth size='small' value={role} onChange={handleRoleChange} error={!!errors.role}>
                {Object.values(AccountRole).map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
              {errors.role && (
                <Typography color='error' variant='caption'>
                  {errors.role}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Trạng thái</Typography>
            </Grid>
            <Grid size={9}>
              <Select
                name='status'
                fullWidth
                size='small'
                value={status}
                onChange={handleStatusChange}
                error={!!errors.status}
              >
                <MenuItem value={1}>Hoạt động</MenuItem>
                <MenuItem value={0}>Không hoạt động</MenuItem>
              </Select>
              {errors.status && (
                <Typography color='error' variant='caption'>
                  {errors.status}
                </Typography>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>
            Hủy
          </Button>
          <Button type='submit' color='success'>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default UserModal
