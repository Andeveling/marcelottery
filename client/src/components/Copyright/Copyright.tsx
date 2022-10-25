import { PublicRoutes } from '@/routes'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Copyright = (props: any) => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link to={PublicRoutes.HOME}>Go home</Link>
      {new Date().getFullYear()}
    </Typography>
  )
}
export default Copyright

Copyright.defaultProps = {
  props: Array(10).fill(''),
}
