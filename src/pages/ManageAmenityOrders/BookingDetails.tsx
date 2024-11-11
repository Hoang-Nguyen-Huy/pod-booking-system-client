import { Avatar, Box, Divider, Typography, useTheme } from '@mui/material'
import AmenityCard from './AmenityCard'
import { useBookingAmenityContext } from '~/contexts/BookingAmenityContext'
import { formatDate, formatTime } from '~/utils/utils'

export default function BookingAmenityDetails() {
  const theme = useTheme()
  const { bookedRoom, selectedAmenities, calculateTotal } = useBookingAmenityContext()

  if (!bookedRoom) return null

  const calculateHours = (startTime: string, endTime: string) => {
    const start = new Date(startTime)
    const end = new Date(endTime)
    const diffInMs = end.getTime() - start.getTime()
    return Math.ceil(diffInMs / (1000 * 60 * 60)) // Round up to the nearest hour
  }
  const hours = calculateHours(bookedRoom.startTime, bookedRoom.endTime)
  const roomTotal = bookedRoom.roomType.price * hours
  const amenitiesTotal = selectedAmenities.reduce((total, amenity) => total + amenity.price * amenity.quantity, 0)
  const discount = bookedRoom.servicePackage.discountPercentage
    ? (amenitiesTotal * bookedRoom.servicePackage.discountPercentage) / 100
    : 0
  const total = calculateTotal()

  return (
    <Box sx={{ bgcolor: 'white' }}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant='h5' color={theme.palette.primary.main} gutterBottom fontWeight='bold'>
          Đơn đặt
        </Typography>
        <Box display='flex' alignItems='center' sx={{ marginTop: '24px' }} gap='20px'>
          <Avatar
            src={bookedRoom.image || ''}
            alt={bookedRoom.name || ''}
            sx={{ width: '200px', height: '193px', borderRadius: '16px' }}
            variant='rounded'
          />
          <Box
            sx={{
              minHeight: '193px',
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column'
            }}
          >
            <Typography variant='h5' fontWeight='bold'>
              {bookedRoom.roomType.name || 'Chưa chọn loại phòng'}
            </Typography>
            <Box display='flex' sx={{ marginTop: '4px' }}>
              <Typography variant='subtitle2' color={theme.palette.primary.main}>
                {bookedRoom.roomType.price.toLocaleString()} VND
              </Typography>
              <Typography variant='subtitle2'>/tiếng</Typography>
            </Box>
            <Box sx={{ marginTop: '12px' }} flexDirection='column' display='flex' gap='12px'>
              <Box display='flex' gap='3px'>
                <Typography variant='body2' fontWeight='bold'>
                  Địa chỉ:
                </Typography>
                <Typography variant='body2'>
                  {' '}
                  {bookedRoom.roomType.building.address
                    ? bookedRoom.roomType.building.address
                    : bookedRoom.roomType.building.address}
                </Typography>
              </Box>
              <Box display='flex' gap='3px'>
                <Typography variant='body2' fontWeight='bold'>
                  Ngày:
                </Typography>
                <Typography variant='body2'>{formatDate(bookedRoom.startTime)}</Typography>
              </Box>
              <Box display='flex' gap='3px'>
                <Typography variant='body2' fontWeight='bold'>
                  Slot:
                </Typography>
                <Typography variant='body2'>
                  {formatTime(bookedRoom.startTime)} - {formatTime(bookedRoom.endTime)}
                </Typography>
              </Box>
              <Box display='flex' gap='3px'>
                <Typography variant='body2' fontWeight='bold'>
                  Phòng:
                </Typography>
                <Typography variant='body2'>{bookedRoom.name}</Typography>
              </Box>
              <Box display='flex' gap='3px'>
                <Typography variant='body2' fontWeight='bold'>
                  Gói:
                </Typography>
                <Typography variant='body2'>{bookedRoom.servicePackage.name}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: '24px', paddingY: '20px' }}>
          {selectedAmenities.length > 0 && (
            <>
              <Typography variant='subtitle1' gutterBottom color={theme.palette.primary.main}>
                Dịch vụ bạn đã chọn
              </Typography>
              <Typography variant='subtitle2'>{bookedRoom.name}</Typography>
            </>
          )}
          {selectedAmenities.map((amenity, index) => (
            <Box key={amenity.id}>
              <AmenityCard amenity={amenity} />
              {index !== selectedAmenities.length - 1 && <Divider sx={{ my: '20px' }} />}
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: '20px' }} display='flex' flexDirection='column' gap='20px'>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle2' color={theme.palette.grey[500]}>
            Tổng giá phòng:
          </Typography>
          <Typography variant='subtitle2' fontWeight='bold'>
            {roomTotal.toLocaleString()} VND
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle2' color={theme.palette.grey[500]}>
            Tổng giá các dịch vụ:
          </Typography>
          <Typography variant='subtitle2' fontWeight='bold'>
            {amenitiesTotal.toLocaleString()} VND
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle2' color={theme.palette.grey[500]}>
            Giảm giá:
          </Typography>
          <Typography variant='subtitle2' fontWeight='bold'>
            {discount.toLocaleString()} VND
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: '20px' }} display='flex' justifyContent='space-between'>
        <Typography variant='subtitle2' color={theme.palette.grey[500]}>
          Tổng đơn:
        </Typography>
        <Typography variant='subtitle2' fontWeight='bold'>
          {total.toLocaleString()} VND
        </Typography>
      </Box>
    </Box>
  )
}