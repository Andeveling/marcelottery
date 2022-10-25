import { useAuth } from '@/hooks'
import { RaffleI, TicketI } from '@/types'
import { numberTicketFormatter } from '@/utilities/numberTicketFormatter'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Divider, IconButton, Paper, Tooltip } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useState, memo } from 'react'

interface TicketProps extends Partial<TicketI>, Pick<RaffleI, 'title' | 'price' | 'description'> {}

export default function TicketCard({ _id, positions, participant, pay, cellphone }: TicketProps) {
  const auth = useAuth()
  const [copyText, setCopyText] = useState('Click para copiar')

  const clickToCopyHandle = () => {
    setCopyText('¡Copiado!')
    navigator.clipboard.writeText(_id?.slice(16) || '')
    setTimeout(() => {
      setCopyText('Click para copiar')
    }, 1000)
  }

  return (
    <Paper elevation={2}>
      <Card sx={{ display: 'flex', minWidth: 290, maxWidth: 350 }}>
        <Box
          sx={{
            display: 'flex',
            minWidth: 290,
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography fontWeight={100} component='div' variant='h4'>
                {numberTicketFormatter(positions)}
              </Typography>
              {auth.token ? (
                <Tooltip title={copyText} placement='top' arrow>
                  <IconButton onClick={clickToCopyHandle}>
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <></>
              )}
            </Box>
            <Divider />
            <Typography variant='h6' color='text.secondary' component='div'>
              {participant ?? 'Libre'}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary' component='div' gutterBottom>
              Nombre
            </Typography>

            <Typography variant='h6' color='text.secondary' component='div' display={'inline-flex'} gutterBottom>
              {cellphone ?? 'celular'}
            </Typography>
            <Typography variant='h6' color='text.secondary' component='div'>
              {pay ? 'Pago' : 'No paga'}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
        </Box>
      </Card>
    </Paper>
  )
}
