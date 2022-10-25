import { useDeleteRaffleMutation, useGetAllLotteriesQuery } from '@/app/'
import { RaffleI } from '@/types'
import { currencyFormatter } from '@/utilities'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { pink } from '@mui/material/colors'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '@/routes'

export const RafflesCard = ({ _id, title, description, datePlayLotteryIds }: Partial<RaffleI>) => {
  const { data } = useGetAllLotteriesQuery()
  const [deleteRaffle, results] = useDeleteRaffleMutation()
  const navigate = useNavigate()
  const handleDelete = () => {
    if (_id)
      Swal.fire({
        title: '¿Estas segura?',
        text: 'Esta acción no tiene reversa, se borrara la rifa y todos los boletos',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, borrar',
      })
        .then((result) => {
          if (result.isConfirmed) {
            deleteRaffle(_id).then((_result) => Swal.fire('Borrada!', 'Rifa borrada con exito.'))
          }
        })
        .catch((_err) => {
          Swal.fire('Opps!', 'Algo salio mal')
        })
  }

  return (
    <Paper>
      <Card variant='outlined' sx={{ mb: 4 }}>
        <Container sx={{ display: 'inline-flex', justifyContent: 'space-between', backgroundColor: pink[100] }}>
          <CardHeader title={title} />
          <IconButton aria-label='delete' size='large' onClick={handleDelete}>
            <DeleteIcon fontSize='inherit' />
          </IconButton>
        </Container>
        <Divider />
        <CardContent>
          <Typography variant='button'>Descripción</Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            {description}
          </Typography>
          <Divider />
          <>
            {datePlayLotteryIds?.map((lotteryDay, i) => {
              const loteria = data?.find((lot) => lot._id === lotteryDay.lotteryId)

              return (
                <Container key={lotteryDay._id}>
                  <Typography variant='button'>Sorteo # {`${i + 1}`}</Typography>
                  <Typography>Con la loteria de: {loteria?.title}</Typography>
                  <Typography>Fecha de juego: {new Date(lotteryDay.date).toLocaleDateString()}</Typography>
                  <Typography gutterBottom>Premio: {currencyFormatter(lotteryDay.reward)}</Typography>
                  <Divider />
                </Container>
              )
            })}
          </>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to={`${_id}`}>
            <Button size='small'>Ver Boletos</Button>
          </Link>
        </CardActions>
      </Card>
    </Paper>
  )
}
