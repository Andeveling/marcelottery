import { useLoginMutation } from '@/app/services'
import { Copyright } from '@/components'
import { setCredentials } from '@/features/auth/authSlice'
import { useAuth } from '@/hooks'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { loginValidations } from './loginValidation'

export default function AddRaffle() {
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    if (auth.username) navigate(`/${PrivateRoutes.PRIVATE}`)
  }, [])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidations,
    onSubmit: async (values) => {
      console.log(values)
      /* try {
        const user = await login(credentials).unwrap()
        dispatch(setCredentials(user))
        navigate(`/${PrivateRoutes.PRIVATE}`)
      } catch (e) {
        console.log(error)
      } */
    },
  })

  return auth.username ? (
    <></>
  ) : (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <Box component='form' onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            type='tex'
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            login
          </Button>
          <Grid container></Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  )
}
