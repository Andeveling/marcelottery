import { useGetRafflesByIdQuery } from '@/app/'
import { PrivateRoutes } from '@/routes'
import { Search } from '@mui/icons-material'
import {
  Box,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  OutlinedInput,
} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { ChangeEvent, useContext, useMemo, useState } from 'react'
import { Params, useNavigate, useParams } from 'react-router-dom'
import { RaffleContext } from './RaffleContext'
import TicketCard from './TicketCard'

const RaffleTickets = () => {
  const navigate = useNavigate()
  const params: Params = useParams()
  const { data, isLoading, isSuccess, isError, error } = useGetRafflesByIdQuery(params.id ?? '')
  const context = useContext(RaffleContext)
  const [searchT, setSearchT] = useState('')
  let content
  const filteredTickets = useMemo(() => {
    if (data && isSuccess) {
      return data?.ticketsIds.filter((ticket) => {
        return ticket._id.toLowerCase().includes(context?.search.toLowerCase() || '')
      })
    } else {
      return []
    }
  }, [data, context?.search])

  if (isLoading) content = <CircularProgress />
  if (isSuccess && data) {
    content = filteredTickets?.map((ticket) => (
      <Grid key={ticket._id}>
        <TicketCard
          _id={ticket._id}
          participant={ticket.participant}
          title={data.title}
          cellphone={ticket.cellphone}
          price={data.price}
          description={data.description}
          positions={ticket.positions}
        />
      </Grid>
    ))
  }
  if (isError && error) navigate(`/${PrivateRoutes.DASHBOARD_HOME}`)

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    context?.setSearch(searchT)
  }
  return (
    <Container>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Box component='form' onSubmit={handleSubmit}>
            <FormControl variant='outlined'>
              <OutlinedInput
                id='outlined-adornment-weight'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton type='submit'>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(e) => setSearchT(e.currentTarget.value)}
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <FormHelperText id='outlined-weight-helper-text'>Nombre del participante</FormHelperText>
            </FormControl>
          </Box>
        </Grid>
        {content}
      </Grid>
    </Container>
  )
}
export default RaffleTickets
