import { MenuItem, Select, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid2'
import { useState } from 'react'

export default function AddUser() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant='contained'
        sx={{ backgroundColor: 'grey.900', borderRadius: '12px' }}
        startIcon={<AddIcon />}
      >
        Thêm người dùng
      </Button>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const formJson = Object.fromEntries((formData as any).entries())
            const email = formJson.email
            console.log(email)
            handleClose()
          }
        }}
      >
        <DialogTitle sx={{ fontSize: '20px', fontWeight: '500' }}>Thêm người dùng</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Tên</Typography>
            </Grid>
            <Grid size={9}>
              <TextField fullWidth size='small' required type={'text'} />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Email</Typography>
            </Grid>
            <Grid size={9}>
              <TextField fullWidth size='small' required type={'email'} />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Mật khẩu</Typography>
            </Grid>
            <Grid size={9}>
              <TextField fullWidth size='small' required type={'password'} />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }} alignContent={'center'} justifyContent={'center'}>
            <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Vai trò</Typography>
            </Grid>
            <Grid size={9}>
              <Select fullWidth size='small'>
                <MenuItem value={'Admin'}>Admin</MenuItem>
                <MenuItem value={'Manager'}>Quản lí</MenuItem>
                <MenuItem value={'Staff'}>Nhân viên</MenuItem>
                <MenuItem value={'Customer'}>Khách hàng</MenuItem>
              </Select>
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
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
