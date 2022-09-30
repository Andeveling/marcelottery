import { Types } from "mongoose"

export interface AdminI {
  id: string | number
  userName: string
  password: string
  raffles: Types.ObjectId
}
enum MethodPayI {
  DAVIPLATA = "Daviplata",
  NEQUI = "Nequi",
  CASH = "Efectivo",
  OTHER = "Otro",
}
export interface ParticipantI {
  id: number | string
  name: string
  cellphone: string
  methodPay: MethodPayI
  tickets: Types.Array
}
export interface TicketI {
  id: number | string
  position: string | number
  participant: Types.ObjectId
  raffle: Types.ObjectId
  price: number
  pay: boolean
  taken: boolean
}
export interface RaffleI {
  id: number | string
  tickets: Types.Array
  ticketsPrice: number
  datePlay: Date
  reward: string
  lottery: string
  admin: Types.ObjectId
}
