import { CircularProgress, Grid, Typography } from '@mui/material'
import { Modal } from '../Modal'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RaffleForm from './RaffleForm'
import { RafflesCard } from './RafflesCard'
import { useGetAllRafflesQuery } from '@/app/'

export default function Raffle() {
  const { data, isLoading, isSuccess, isError } = useGetAllRafflesQuery()
  let content
  if (isLoading) content = <CircularProgress />
  if (isSuccess && data.length === 0) content = <Typography>No hay rifas para mostrar</Typography>
  if (isSuccess && data.length > 0) {
    content = data.map((raffle) => {
      return (
        <>
          <Grid item key={raffle._id} xs={12}>
            <RafflesCard
              title={raffle.title}
              description={raffle.description}
              datePlayLotteryIds={raffle.datePlayLotteryIds}
            />
          </Grid>
        </>
      )
    })
  }
  if (isError) content = <Typography>Upps salió mal</Typography>
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant='h5'>Rifas</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Modal
          textButton='Añadir Rifa'
          icon={<AddCircleIcon />}
          form={<RaffleForm />}
          title={'Añade una nueva rifa'}
          description={'Por favor define un nombre para la Rifa'}
        />
      </Grid>
      <>{content}</>
    </Grid>
  )
}
