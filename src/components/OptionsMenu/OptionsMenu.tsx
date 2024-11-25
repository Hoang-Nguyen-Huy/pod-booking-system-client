import { styled } from '@mui/material/styles'
import { dividerClasses } from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MuiMenuItem from '@mui/material/MenuItem'
import { paperClasses } from '@mui/material/Paper'
import { listClasses } from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import { useLogoutMutation } from '~/queries/useAuth'
import { clearLS, getRefreshTokenFromLS } from '~/utils/auth'
import { useAppContext } from '~/contexts/AppProvider'
import { Link, useNavigate } from 'react-router-dom'
import { handleErrorApi } from '~/utils/utils'
import { useCallback, useEffect } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { toast } from 'react-toastify'
import envConfig from '~/constants/config'

interface Props {
  anchorEl: HTMLElement | null
}

const MenuItem = styled(MuiMenuItem)({
  margin: '2px 0'
})

export default function OptionsMenu({ anchorEl }: Props) {
  const open = Boolean(anchorEl)
  const { setAuth, setAccount, account } = useAppContext()
  const navigate = useNavigate()
  const logoutMutation = useLogoutMutation()
  const socketCL = new SockJS(envConfig.VITE_SOCKET_URL)
  const client = Stomp.over(socketCL)
  const logout = useCallback(async () => {
    if (logoutMutation.isPending) return
    try {
      const refreshToken = getRefreshTokenFromLS()
      await logoutMutation.mutateAsync({ refreshToken })
      setAccount(null)
      setAuth(false)
      clearLS()
      navigate('/')
    } catch (error) {
      handleErrorApi({ error })
    }
  }, [logoutMutation, setAuth, setAccount, navigate])
  useEffect(() => {
    client.connect({}, () => {
      client.subscribe('/topic/logout-user', (data) => {
        console.log('OK')
        const payload = JSON.parse(data.body)
        if (payload.accountId === account?.id) {
          logout()
          toast('Tài khoản của bạn bị cấm')
        }
      })
    })

    return () => {
      if (client.connected) {
        client.disconnect(() => {})
      }
    }
  }, [logout, account, client])

  return (
    <>
      <Button
        aria-label='Open menu'
        sx={{ borderColor: 'transparent', justifyContent: 'flex-start', minWidth: 'auto', padding: 0 }}
      >
        <KeyboardArrowDownIcon color='action' sx={{ marginX: 0 }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        id='menu'
        open={open}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        sx={{
          marginTop: '4px',
          [`& .${listClasses.root}`]: {
            width: '220px',
            borderRadius: '4px'
          },
          [`& .${paperClasses.root}`]: {
            padding: 0
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px'
          }
        }}
      >
        <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>
            <ListItemIcon>
              <PersonIcon fontSize='small' sx={{ color: '#000' }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: '#000', fontSize: '16px', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.15px' }}
            >
              Tài khoản
            </ListItemText>
          </MenuItem>
        </Link>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize='small' sx={{ color: '#000' }} />
          </ListItemIcon>
          <ListItemText
            sx={{ color: '#000', fontSize: '16px', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.15px' }}
          >
            Đăng xuất
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}
