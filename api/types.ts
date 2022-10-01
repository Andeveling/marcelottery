import { Types } from "mongoose"

export interface RolesI {
  name: string
}
export enum RolesEnum {
  USER = "user",
  ADMIN = "admin",
}
export interface AdminI {
  id: string | number
  username: string
  password: string
  raffles: Types.ObjectId
  role: Types.ObjectId
}
export enum MethodPayEnum {
  DAVIPLATA = "Daviplata",
  NEQUI = "Nequi",
  CASH = "Efectivo",
  OTHER = "Otro",
}
export interface ParticipantI {
  id: number | string
  name: string
  cellphone: string
  methodPay: MethodPayEnum
  tickets: Types.ObjectId[]
}
export interface TicketI {
  id: number | string
  positions: string | number
  participant: Types.ObjectId
  raffle: Types.ObjectId
  pay: boolean
  taken: boolean
}
export interface RaffleI {
  id: number | string
  tickets: Types.ObjectId[]
  ticketsPrice: number
  datePlay: Date
  reward: string
  lottery: string
  admin: Types.ObjectId
  price: number
}
