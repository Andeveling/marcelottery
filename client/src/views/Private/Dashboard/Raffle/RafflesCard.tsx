import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { RaffleI } from '@/types'

export const RafflesCard = ({ title, description, datePlayLotteryIds }: Partial<RaffleI>) => {
  return (
    <Card variant='outlined'>
      <Grid container>
        <Grid item xs={10}>
          <CardHeader title={title} />
        </Grid>
        <Grid display='flex' justifyContent='end' xs={2}>
          <IconButton aria-label='delete' size='large'>
            <DeleteIcon fontSize='inherit' />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
      <CardContent>
        <Typography variant='subtitle1' color='text.secondary'>
          {description}
        </Typography>
        <>
          {datePlayLotteryIds?.map((lotteryDay) => (
            <>
              <Typography key={lotteryDay} variant='subtitle2' color='text.secondary'>
                {lotteryDay}
              </Typography>
            </>
          ))}
        </>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size='small'>Ver Boletos</Button>
      </CardActions>
    </Card>
  )
}
