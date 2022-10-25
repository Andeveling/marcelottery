import { RaffleContextProvider } from './RaffleContext'
import RaffleTickets from './RaffleTickets'

const RaffleTicketsP = () => {
  return (
    <>
      <RaffleContextProvider>
        <RaffleTickets />
      </RaffleContextProvider>
    </>
  )
}
export default RaffleTicketsP
