import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Divider, Grid, Typography } from '@mui/material'
import { Modal } from '../Modal'
import Lotteries from './Lotteries'
import { LotteryProvider } from './LotteryContext'
import LotteryForm from './LotteryForm'

export default function Lottery() {
  return (
    <LotteryProvider>
      <Grid justifyContent={'center'} alignItems={'center'} container spacing={2} mb={1}>
        <Grid item xs={6}>
          <Typography variant='h5'>Loterias</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent={'end'}>
          <Modal
            textButton='Añadir Loteria'
            icon={<AddCircleIcon />}
            form={<LotteryForm />}
            title={'Añadir Nueva Loteria'}
            description={'Por favor define un nombre para la loteria'}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid justifyContent={'center'} alignItems={'center'} container>
        <Grid item xs={12} sm={5}>
          <Lotteries />
        </Grid>
      </Grid>
    </LotteryProvider>
  )
}
