export interface LotteryI {
  _id: string
  title: string
  createdAt: date
  updatedAt: date
}

export interface TicketI {
  _id: string
  positions: number
  participantId: string
  raffleId: RaffleI['_id']
  taken: boolean
  pay: boolean
  createdAt: date
  updatedAt: date
}
export interface DatePlayLotteryIdsI {
  _id: string
  lotteryId: LotteryI['_id']
  reward: string
  date: date
  createdAt: date
  updatedAt: date
}

export interface RaffleI {
  title: string
  description: string
  datePlayLotteryIds: DatePlayLotteryIdsI['_id'][]
  ticketsIds: TicketI['_id'][]
  adminId: string
  price: number
  _id: string
  createdAt: Date
  updatedAt: Date
}
export interface RenderRafflesI extends Omit<RaffleI, 'adminId', 'updateAt', 'datePlayLotteryIds', 'ticketsIds'> {}
