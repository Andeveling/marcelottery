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
export interface CreateTikeTicketI extends Pick<TicketI, "positions" | "raffle"> {}

export interface LotteryI {
  id: string | number
  title: string
}
export interface DatePlayLotteryI {
  id: string | number
  date: Date
  reward: string
  lottery: Types.ObjectId
}
export interface CreateDatePlayLotteryI extends Pick<DatePlayLotteryI, "date" | "lottery"> {}

export interface RaffleI {
  id: number | string
  title: string
  description: string
  tickets: Types.ObjectId[]
  ticketsPrice: number
  datePlayLottery: Types.ObjectId[]
  admin: Types.ObjectId
  price: number
}
export interface CreateInitialRaffleI extends Pick<RaffleI, "title" | "description" | "admin" | "price"> {}
