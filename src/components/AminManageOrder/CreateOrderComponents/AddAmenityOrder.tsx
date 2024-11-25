import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography, useTheme } from '@mui/material'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Amenity, BookingInfo, RoomContextType } from '~/contexts/BookingContext'
import { useGetAmenities } from '~/queries/useAmenity'
import { AmenityType } from '~/schemaValidations/amenity.schema'
import { tokens } from '~/themes/theme'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { calTotalPrice } from '~/utils/order'
import { formatCurrency } from '~/utils/currency'

interface AddAmenityOrderProps {
  bookingData: BookingInfo
  setBookingData: Dispatch<SetStateAction<BookingInfo>>
}

const amenityTranslations: Record<string, string> = {
  Food: 'Thức ăn và đồ uống',
  Office: 'Thiết bị',
  All: 'Tất cả'
}

const AddAmenityOrder: React.FC<AddAmenityOrderProps> = ({ bookingData, setBookingData }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [room, setRoom] = useState<RoomContextType>(bookingData.selectedRooms[0])
  const [selectedAmenity, setSelectedAmenity] = useState<string | null>('All')
  const [detailAmenity, setDetailAmenity] = useState<AmenityType | null>(null)
  const [errorState, setErrorState] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(0)
  const { data: amenities = [] } = useGetAmenities()
  const filteredAmenities =
    selectedAmenity === 'All' ? amenities : amenities.filter((item) => item.type === selectedAmenity)

  const handleIncrement = () => {
    if (!room) {
      setErrorState('Vui lòng chọn phòng')
      return
    }
    if (!detailAmenity) {
      setErrorState('Vui lòng chọn dịch vụ')
      return
    } else {
      const newQuantityApplyPackage = (quantity + 1) * calTotalPrice(bookingData).packageRepeat
      const selectedRoom = bookingData.selectedRooms.filter((item) => item === room)[0]
      const preAmennity = selectedRoom.amenities.filter((item) => item.name === detailAmenity.name)
      if (preAmennity.length > 0) {
        if (
          detailAmenity.quantity <
          newQuantityApplyPackage + preAmennity[0].quantity * calTotalPrice(bookingData).packageRepeat
        ) {
          setErrorState('Số lượng dịch vụ không đủ')
          return
        }
        if (detailAmenity.type === 'Office') {
          if (
            (preAmennity[0].quantity * calTotalPrice(bookingData).packageRepeat + newQuantityApplyPackage) /
              calTotalPrice(bookingData).packageRepeat >=
            3
          ) {
            setErrorState('Mỗi phòng chỉ được chọn tối đa 2 dịch vụ này')
            return
          }
          setErrorState(null)
          setQuantity((prevQuantity) => prevQuantity + 1)
          return
        }
      } else {
        if (detailAmenity.quantity < newQuantityApplyPackage) {
          setErrorState('Số lượng dịch vụ không đủ')
          return
        }
        if (detailAmenity.type === 'Office') {
          if (newQuantityApplyPackage / calTotalPrice(bookingData).packageRepeat >= 3) {
            setErrorState('Mỗi phòng chỉ được chọn tối đa 2 dịch vụ này')
            return
          }
        }
      }
      setErrorState(null)
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  useEffect(() => {
    setRoom(bookingData.selectedRooms[0])
  }, [bookingData.selectedRooms])

  const handleDecrement = () => {
    if (quantity > 0) {
      setErrorState(null)
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleSelectAmenity = (item: AmenityType) => {
    setErrorState(null)
    setQuantity(0)
    if (detailAmenity?.name == item.name) {
      setDetailAmenity(null)
      return
    }
    setDetailAmenity(item)
  }

  const handleAddAmentity = () => {
    if (!detailAmenity) return
    if (quantity === 0) {
      setErrorState('Vui lòng chọn số lượng')
      return
    }
    const newAmenity: Amenity = {
      id: detailAmenity?.id,
      name: detailAmenity?.name,
      price: detailAmenity?.price,
      quantity: quantity
    }
    setBookingData((prev) => ({
      ...prev,
      selectedRooms: prev.selectedRooms.map((itemRoom) => {
        if (itemRoom === room) {
          if (itemRoom.amenities.find((item) => item.name === newAmenity.name)) {
            return {
              ...itemRoom,
              amenities: itemRoom.amenities.map((item) => {
                if (item.name === newAmenity.name) {
                  return {
                    ...item,
                    quantity: item.quantity + newAmenity.quantity
                  }
                }
                return item
              })
            }
          } else {
            return {
              ...itemRoom,
              amenities: [...itemRoom.amenities, newAmenity]
            }
          }
        }
        return itemRoom
      })
    }))
    setErrorState(null)
    setQuantity(0)
    setDetailAmenity(null)
  }

  return (
    <Box sx={{ marginRight: '12px', background: '#FFF', paddingRight: '12px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px', alignItems: 'end' }}>
        <Typography variant='h5' sx={{ color: colors.primary[500], fontWeight: 700 }}>
          Dịch vụ
        </Typography>
        <Typography variant='body1' sx={{ color: colors.grey[500], fontStyle: 'italic', fontSize: '12px' }}>
          Bạn vẫn có thể thêm các dịch vụ sau khi đặt
        </Typography>
      </Box>
      <Box sx={{ padding: '10px 0px 20px 20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '24px', paddingRight: '10px' }}>
          <FormControl fullWidth>
            <InputLabel id='location-label'>Phòng</InputLabel>
            <Select
              labelId='r-type-label'
              value={room?.id || ''}
              label='Phòng'
              onChange={(e) => {
                setRoom(
                  bookingData?.selectedRooms.filter((item) => item.id === (e.target.value as unknown as number))[0]
                )
              }}
            >
              {bookingData?.selectedRooms.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='amenities-label'>Loại dịch vụ</InputLabel>
            <Select
              labelId='amenities-label'
              value={selectedAmenity || 'All'}
              label='Loại dịch vụ'
              onChange={(e) => {
                setSelectedAmenity(e.target.value)
              }}
            >
              <MenuItem key={0} value={'All'}>
                {amenityTranslations['All']}
              </MenuItem>
              {Array.from(new Set(amenities.map((amenity) => amenity.type))).map((uniqueType, index) => (
                <MenuItem key={index + 1} value={uniqueType}>
                  {amenityTranslations[uniqueType] || uniqueType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ padding: '20px 0px 29px 0px' }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 700, fontSize: '16px' }}>
            Danh sách dịch vụ
          </Typography>
          <Box
            sx={{
              height: '300px',
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                width: '4px'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#a9a9b1',
                borderRadius: '4px'
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent'
              },
              paddingRight: '10px'
            }}
          >
            <Grid container spacing={4} sx={{ padding: '10px 0' }}>
              {filteredAmenities.map((item, index) => (
                <Grid item lg={4} md={6} xs={12} key={index}>
                  <Button
                    variant='outlined'
                    fullWidth
                    sx={{
                      padding: '10px 0px',
                      minHeight: '50px',
                      borderRadius: '4px',
                      textAlign: 'center',
                      color: 'black',
                      borderColor: 'black',
                      fontSize: '14px',
                      backgroundColor: detailAmenity?.name == item.name ? colors.grey[100] : 'transparent'
                    }}
                    onClick={() => {
                      handleSelectAmenity(item)
                    }}
                  >
                    {item.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            paddingBottom: '20px',
            paddingRight: '10px'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            {errorState && (
              <Typography
                variant='subtitle2'
                sx={{ color: 'red', paddingBottom: '10px', position: 'absolute', bottom: '40px' }}
              >
                {errorState}
              </Typography>
            )}
            <Typography
              variant='subtitle2'
              sx={{ fontWeight: 700, fontSize: '16px', padding: '20px 10px 0px 0px', color: colors.grey[200] }}
            >
              Số lượng
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant='outlined'
                onClick={handleDecrement}
                disabled={quantity === 0}
                sx={{
                  minWidth: '35px',
                  height: '40px',
                  borderRadius: '8px 0px 0px 8px',
                  '&:last-of-type': { borderTopRightRadius: '4px', borderBottomRightRadius: '4px' },
                  borderColor: colors.grey[200]
                }}
              >
                <RemoveIcon sx={{ color: 'black' }} />
              </Button>
              <Typography
                variant='body1'
                aria-readonly='true'
                sx={{
                  width: '80px',
                  textAlign: 'center',
                  height: '40px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: colors.grey[200],
                  padding: '9.2px 8px 8px 8px',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'default'
                }}
              >
                {quantity}
              </Typography>
              <Button
                variant='outlined'
                onClick={handleIncrement}
                sx={{
                  minWidth: '35px',
                  height: '40px',
                  borderRadius: '0px 8px 8px 0px',
                  '&:first-of-type': { borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' },
                  borderColor: colors.grey[200]
                }}
              >
                <AddIcon sx={{ color: 'black' }} />
              </Button>
            </Box>
          </Box>
          <Typography variant='subtitle2' sx={{ fontWeight: 700, fontSize: '20px', textAlign: 'center' }}>
            {formatCurrency(Math.round(detailAmenity?.price ? detailAmenity.price * quantity : 0))}
          </Typography>
        </Box>
        <Box sx={{ padding: '10px 0px 10px 0px' }}>
          <Button
            variant='outlined'
            fullWidth
            sx={{
              minHeight: '30px',
              borderRadius: '96px',
              border: '1px solid #A9A9B1',
              boxShadow:
                '0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.20)',
              color: colors.grey[500],
              fontSize: '12px',
              fontWeight: '500px',
              textTransform: 'uppercase',
              paddingRight: '10px'
            }}
            onClick={() => {
              handleAddAmentity()
            }}
          >
            Thêm dịch vụ
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default AddAmenityOrder
