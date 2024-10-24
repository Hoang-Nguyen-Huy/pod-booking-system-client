import { Add, Edit } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

import BackdropCustom from '~/components/Progress/Backdrop'

import { AmenityOrderType } from '~/schemaValidations/amenityOrder.schema'
import { tokens } from '~/themes/theme'
import { handleErrorApi } from '~/utils/utils'
import AddAmenity from './AddAmenity'
import BookingDetails from './BookingDetails'
import { Amenity } from '~/constants/type'
import { useBookingAmenityContext } from '~/contexts/BookingAmenityContext'
import PaymentBox from '~/components/AminManageOrder/CreateOrderComponents/PaymentBox'
import QRCodePaymentAmenity from '~/components/QRCodePayment/QRCodePaymentAmenity'
import QRCodePaymentStaffAmenity from '~/components/QRCodePayment/QRCodePaymentStaffAmenity'

type BookingType = {
  bookedRoom: any
  amenities: Amenity[]
}

const CreateAmenityOrderModal = ({ row, refetch }: { row?: AmenityOrderType; refetch: () => void }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [open, setOpen] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)
  const { clearAll } = useBookingAmenityContext()
  const handleClickOpen = () => {
    clearAll()
    setOpen(true)
  }

  const handleClose = () => {
    clearAll()
    setOpen(false)
  }
  const handleCardPayment = async () => {
    setOpenPayment(true)

    // if (response.code === 201) {
    //   toast.success('Tạo đơn hàng thành công')
    //   handleClose()
    // }
  }

  return (
    <>
      <Button color='primary' startIcon={<Add />} onClick={handleClickOpen}>
        Tạo đơn tiện ích
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        PaperProps={{
          sx: {
            position: 'relative',
            background: colors.grey[50],
            minWidth: 1200,
            display: 'flex'
          },
          component: 'form',
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries((formData as any).entries())
            const payload = {
              ...row,
              ...formJson
            }
            try {
              //   const result =
              //     action === ACTION.UPDATE
              //       ? await editRoomMutation.mutateAsync(payload)
              //       : await createRoomMutation.mutateAsync(payload)
              //   toast.success(result.data.message, {
              //     autoClose: 3000
              //   })
              refetch()
            } catch (error) {
              handleErrorApi({ error })
            }
            handleClose()
          }
        }}
      >
        <BackdropCustom loading={false} />
        <DialogTitle>
          <Typography variant='h5' fontWeight='500'>
            Tạo đơn tiện ích
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            spacing={2}
            sx={{
              borderRadius: 2,
              width: '100%'
            }}
          >
            <Grid size={6}>
              <AddAmenity />
            </Grid>
            <Grid size={6}>
              <BookingDetails />
            </Grid>
            <Grid size={12}>{openPayment && <QRCodePaymentStaffAmenity />}</Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>
            Hủy
          </Button>

          <Button variant='outlined'>Thanh toán tiền mặt</Button>
          <Button variant='outlined' onClick={handleCardPayment}>
            Thanh toán qua thẻ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CreateAmenityOrderModal
