import React, { useState } from 'react'
import { Button, Modal, Box, Typography, useTheme, IconButton, Grid, Divider } from '@mui/material'
import { Moment } from 'moment'
import { BookingInfo, slotType } from '~/contexts/BookingContext'
import CloseIcon from '@mui/icons-material/Close'
import { Account, createOrder } from '~/apis/orderApi'
import Calendar from '../Calendar/Calendar'
import HeaderOrderComponent from './CreateOrderComponents/HeaderOrderComponent'
import CustomerOrderCard from './CreateOrderComponents/CustomerOrderCard'
import AddAmenityOrder from './CreateOrderComponents/AddAmenityOrder'
import BookingDetailsCustom from './CreateOrderComponents/BookingDetailsCustom'
import { useNavigate } from 'react-router-dom'
import PaymentBox from './CreateOrderComponents/PaymentBox'

interface CreateOrderModalProps {
  open: boolean
  onClose: () => void
}

const CreateOrderModal: React.FC<CreateOrderModalProps> = ({ open, onClose }) => {
  const [selectedDates, setSelectedDates] = useState<Moment[]>([])
  const [selectedSlots, setSelectedSlots] = useState<slotType[]>([])
  const theme = useTheme()
  const navigate = useNavigate()
  const [customer, setCustomer] = useState<Account | null>(null)
  const [bookingData, setBookingData] = useState<BookingInfo>({
    roomType: null,
    selectedRooms: [],
    date: null,
    timeSlots: [],
    servicePackage: null
  })
  const [openPayment, setOpenPayment] = useState<boolean>(false)

  const handleCreateOrder = () => {
    setOpenPayment(false)
    createOrder(bookingData)
    navigate('/admin/orders')
  }

  const handlePayment = () => {
    setOpenPayment(true)
    createOrder(bookingData)
  }

  return (
    <Box>
      {open == true ? (
        <Modal open={open} onClose={onClose}>
          <Box
            sx={{
              width: '70vw',
              height: '90vh',
              padding: 3,
              margin: 'auto',
              bgcolor: theme.palette.grey[100],
              borderRadius: 2,
              marginTop: '40px',
              overflowY: 'auto'
            }}
          >
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Box display='flex' gap='10px'>
                <Typography variant='h5' sx={{ marginTop: '20px' }} fontWeight='500'>
                  Tạo đơn hàng
                </Typography>
              </Box>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <HeaderOrderComponent
              bookingData={bookingData}
              setBookingData={setBookingData}
              setSelectedDates={setSelectedDates}
              selectedSlots={selectedSlots}
              setSelectedSlots={setSelectedSlots}
            />
            <Grid container sx={{ width: '100%' }}>
              <Grid
                item
                lg={6}
                md={6}
                sx={{ paddingRight: '12px', marginTop: '10px', bgcolor: 'white', padding: 2, borderRadius: '5px' }}
              >
                <Calendar selected={selectedDates} slots={selectedSlots} />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  paddingLeft: '12px',
                  marginTop: '10px'
                }}
              >
                <CustomerOrderCard customer={customer} setCustomer={setCustomer} bookingData={bookingData} />
              </Grid>
            </Grid>
            <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
            <Grid container sx={{ width: '100%' }}>
              <Grid item lg={6} md={6}>
                <AddAmenityOrder bookingData={bookingData} setBookingData={setBookingData} />
              </Grid>
              <Grid item lg={6} md={6}>
                <Box sx={{ marginLeft: '12px', marginTop: '10px', bgcolor: 'white', padding: 2, borderRadius: '5px' }}>
                  <BookingDetailsCustom bookingData={bookingData} setBookingData={setBookingData} />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '20px', gap: '10px' }}>
              <Button variant='text' onClick={onClose}>
                Hủy
              </Button>
              <Button variant='outlined' onClick={handleCreateOrder}>
                Thanh toán tiền mặt
              </Button>
              <Button variant='outlined' onClick={handlePayment}>
                Thanh toán qua thẻ
              </Button>
            </Box>
            <Box sx={{ marginTop: '20px' }}>{openPayment == true && <PaymentBox bookingData={bookingData} />}</Box>
          </Box>
        </Modal>
      ) : null}
    </Box>
  )
}

export default CreateOrderModal
