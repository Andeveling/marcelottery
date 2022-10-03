import { resetCredentials } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { menuStyles } from '@/components/'

interface Props {
  call: string
}

export default function Logout({ call }: Props) {
  const dispatch = useAppDispatch()
  const closeSection = () => dispatch(resetCredentials())
  let content = <></>

  if (call === 'drawer')
    content = (
      <ListItem disablePadding>
        <Button fullWidth variant='text' color='primary' onClick={closeSection}>
          <ListItemText sx={{ textAlign: 'center' }}>Logout</ListItemText>
        </Button>
      </ListItem>
    )
  if (call === 'nav')
    content = (
      <Button sx={menuStyles} variant='text' color='inherit' onClick={closeSection}>
        <Typography variant='subtitle2'>Logout</Typography>
      </Button>
    )

  return <>{content}</>
}
