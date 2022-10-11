import { useCreateLotteryMutation } from '@/app/services/'
import { useAuth } from '@/hooks'
import { Alert, AlertTitle, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { lotteryValidator } from './lotteryValidators'

export default function LotteryForm() {
  const [createLottery, { isLoading, isSuccess, data }] = useCreateLotteryMutation()
  const message = <></>

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: lotteryValidator,
    onSubmit: (value, { resetForm }) => {
      createLottery(value)
      resetForm()
    },
  })

  return (
    <>
      <Box component='form' onSubmit={formik.handleSubmit} noValidate>
        <TextField
          margin='normal'
          required
          fullWidth
          type='text'
          id='title'
          label='Title'
          name='title'
          autoComplete='title'
          autoFocus
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <Button disabled={!formik.isValid || isLoading} type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
          enviar
        </Button>
        <Box height={100} mt={3} textAlign='center'>
          {isSuccess ? (
            <Alert severity='success' sx={{ textAlign: 'center' }}>
              <AlertTitle>Loteria {data.title}</AlertTitle>
              ha sido agredada con exito!
            </Alert>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  )
}
