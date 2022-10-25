/* eslint-disable no-use-before-define */
export interface LotteryI {
  _id: string
  title: string
  createdAt: Date
  updatedAt: Date
}

export interface TicketI {
  _id: string
  positions: number
  participantId: string
  raffleId: RaffleI['_id']
  taken: boolean
  pay: boolean
  createdAt: Date
  updatedAt: Date
}
export interface DatePlayLotteryIdsI {
  _id: string
  lotteryId: LotteryI['_id']
  reward: string
  date: Date
  createdAt: Date
  updatedAt: Date
}

export interface RaffleI {
  _id: string
  title: string
  description: string
  datePlayLotteryIds: DatePlayLotteryIdsI[]
  ticketsIds: TicketI[]
  adminId: string
  price: number
  createdAt: Date
  updatedAt: Date
}
export interface RenderRafflesI extends Omit<RaffleI, 'adminId', 'updateAt', 'datePlayLotteryIds', 'ticketsIds'> {}
