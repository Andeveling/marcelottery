import { useCreateRaffleMutation, useGetAllLotteriesQuery } from '@/app/services/'
import { useAuth } from '@/hooks'
import { Alert, AlertTitle, Divider, Grid, InputAdornment, MenuItem, Select, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { FieldArray, FormikProvider, getIn, useFormik } from 'formik'
import { raffleValidator } from './raffleValidators'

export default function RaffleForm() {
  const [createRaffle, { isLoading, isSuccess, data, isError, error }] = useCreateRaffleMutation()
  const allLotteries = useGetAllLotteriesQuery()
  const auth = useAuth()

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      adminId: auth.id,
      cant: 0,
      price: 0,
      datePlayLottery: [
        {
          lotteryId: null,
          reward: '',
          date: '',
        },
      ],
    },
    validationSchema: raffleValidator,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createRaffle(values)

        resetForm()
      } catch (error) {
        console.log(error)
      }
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
          name='title'
          label='Titulo'
          autoFocus
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          type='text'
          id='description'
          label='Descripcion'
          name='description'
          multiline
          rows={4}
          autoFocus
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          type='number'
          id='cant'
          label='Cantidad de boletos'
          name='cant'
          autoFocus
          value={formik.values.cant}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.cant && Boolean(formik.errors.cant)}
          helperText={formik.touched.cant && formik.errors.cant}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          type='number'
          id='price'
          label='Precio por boleto'
          name='price'
          autoFocus
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
          autoComplete='false'
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <Divider />
        <Typography variant='subtitle1'>Añade por favor al menos un sorteo</Typography>
        <FormikProvider value={formik}>
          <FieldArray name='datePlayLottery'>
            {({ push, remove }) => (
              <Grid container justifyContent='center'>
                {formik.values.datePlayLottery.map((lottery, index) => {
                  const lotteryId = `datePlayLottery[${index}].lotteryId`
                  const touchedLotteryId = getIn(formik.touched, lotteryId)
                  const errorLotteryId = getIn(formik.errors, lotteryId)
                  // ---
                  const reward = `datePlayLottery[${index}].reward`
                  const touchedReward = getIn(formik.touched, reward)
                  const errorReward = getIn(formik.errors, reward)
                  // ---
                  const date = `datePlayLottery[${index}].date`
                  const touchedDate = getIn(formik.touched, date)
                  const errorDate = getIn(formik.errors, date)

                  return (
                    <Grid xs={12} item key={index} gap={1}>
                      <Typography>Sorteo #{index + 1}</Typography>

                      <Select
                        fullWidth
                        id='lotteryId'
                        value={lottery.lotteryId || ''}
                        label='loteria'
                        variant='outlined'
                        name={lotteryId}
                        required
                        error={Boolean(touchedLotteryId && errorLotteryId)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                        {allLotteries.data?.map((lottery) => (
                          <MenuItem key={lottery._id} value={lottery._id}>
                            {lottery.title}
                          </MenuItem>
                        ))}
                      </Select>

                      <TextField
                        fullWidth
                        margin='normal'
                        variant='outlined'
                        label='Premio del sorteo'
                        type='text'
                        name={reward}
                        value={lottery.reward}
                        required
                        helperText={touchedReward && errorReward ? errorReward : ''}
                        error={Boolean(touchedReward && errorReward)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <TextField
                        fullWidth
                        margin='normal'
                        variant='outlined'
                        label='Fecha del sorteo'
                        type='date'
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name={date}
                        value={lottery.date}
                        required
                        helperText={touchedDate && errorDate ? errorDate : ''}
                        error={Boolean(touchedDate && errorDate)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />

                      <Box display='flex' alignContent='center' justifyContent='end' mb={2}>
                        <Button size='medium' color='secondary' variant='outlined' onClick={() => remove(index)}>
                          x
                        </Button>
                      </Box>
                      <Divider />
                    </Grid>
                  )
                })}
                <Grid item xs={12} mt={2}>
                  <Button type='button' variant='outlined' onClick={() => push({ lotteryId: 0 })}>
                    Add
                  </Button>
                </Grid>
              </Grid>
            )}
          </FieldArray>
        </FormikProvider>

        <Button disabled={!formik.isValid || isLoading} type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
          enviar
        </Button>
        <Box height={100} mt={3} textAlign='center'>
          {isSuccess ? (
            <Alert severity='success' sx={{ textAlign: 'center' }}>
              <AlertTitle>Riffa creada {data.title}</AlertTitle>
              ha sido agredada con exito!
            </Alert>
          ) : isError && error ? (
            <Alert severity='error' sx={{ textAlign: 'center' }}>
              <AlertTitle>Ocurrio un error intenta de nuevo</AlertTitle>
            </Alert>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  )
}
