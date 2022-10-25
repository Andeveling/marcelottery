import { useDeleteLotteryMutation, useGetAllLotteriesQuery } from '@/app/'
import DeleteIcon from '@mui/icons-material/Delete'
import { CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Swal from 'sweetalert2'
import { LotteryRenderI } from '@/app/services'

export default function Lotteries() {
  const { data, isSuccess, isLoading } = useGetAllLotteriesQuery()
  const [deleteLottery, result] = useDeleteLotteryMutation()

  const handleDelete = (id: LotteryRenderI['_id']): void => {
    Swal.fire({
      title: '¿Estas segura?',
      text: 'Esta acción no tiene reversa',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, borrar',
    })
      .then((result) => {
        if (result.isConfirmed) {
          deleteLottery(id).then((_result) => Swal.fire('Borrada!', 'Loteria borrada con exito.'))
        }
      })
      .catch((_err) => {
        Swal.fire('Opps!', 'Algo salio mal')
      })
  }

  let content = <></>
  if (isLoading)
    content = (
      <Grid item xs={12}>
        <CircularProgress />
      </Grid>
    )
  if (data && isSuccess)
    if (data?.length > 0)
      content = (
        <TableContainer component={Paper} sx={{ maxWidth: 600, minWidth: 320, p: 0, m: 0 }}>
          <Table sx={{ maxWidth: 600, minWidth: 320, p: 0, m: 0 }} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Nombre</TableCell>
                <TableCell align='center'>Borrado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align='left'>{row.title}</TableCell>
                  <TableCell align='center'>
                    <IconButton aria-label='delete' onClick={() => handleDelete(row._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
    else content = <Typography textAlign={'center'}>No hay loterias creadas</Typography>

  return (
    <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 2 }}>
      {content}
    </Grid>
  )
}
