import { useGetAllRafflesQuery } from '@/app/'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Box, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material'
import { Modal } from '../Modal'
import { RaffleContextProvider } from './RaffleContext'
import RaffleForm from './RaffleForm'
import { RafflesCard } from './RafflesCard'

export default function Raffle() {
  const { data, isLoading, isSuccess, isError } = useGetAllRafflesQuery()

  let content
  if (isLoading) content = <CircularProgress />
  if (isSuccess && data.length === 0) content = <Typography>No hay rifas para mostrar</Typography>
  if (isSuccess && data.length > 0) {
    content = data.map((raffle, i) => {
      return (
        <Box key={`${raffle._id}${i}`}>
          <RafflesCard
            _id={raffle._id}
            title={raffle.title}
            description={raffle.description}
            datePlayLotteryIds={raffle.datePlayLotteryIds}
          />
        </Box>
      )
    })
  }
  if (isError) content = <Typography>Upps salió mal</Typography>

  return (
    <>
      <RaffleContextProvider>
        <Grid justifyContent={'center'} alignItems={'center'} container spacing={2} mb={1}>
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
        </Grid>
        <Divider />
        <Container sx={{ mt: 2 }}>{content}</Container>
      </RaffleContextProvider>
    </>
  )
}
