import { Box, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { OrderDetailFullInfoResType } from '~/schemaValidations/orderDetail.schema'
import { tokens } from '~/themes/theme'

export default function CustomerInfo({ orderDetail }: { orderDetail: OrderDetailFullInfoResType['data'] }) {
  const colors = tokens('light')
  const customer = orderDetail?.customer
  return (
    <Box
      sx={{
        bgcolor: 'white',
        padding: '20px',
        borderRadius: 2,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
      }}
    >
      <Typography variant='h5' sx={{ color: colors.primary[500], fontWeight: '700' }}>
        Thông tin khách hàng
      </Typography>
      <Box sx={{ paddingTop: '24px' }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} sx={{ marginBottom: 'auto', paddingTop: '25px !important' }}>
            <TextField
              id='name'
              label='Tên'
              defaultValue={customer?.name}
              fullWidth
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ marginBottom: 'auto', paddingTop: '25px !important' }}>
            <TextField
              id='phoneNumber'
              label='Số điện thoại'
              defaultValue={'09xxxxxxxx'}
              fullWidth
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ marginBottom: 'auto', paddingTop: '25px !important' }}>
            <TextField
              id='email'
              label='Email'
              defaultValue={customer?.email}
              fullWidth
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
