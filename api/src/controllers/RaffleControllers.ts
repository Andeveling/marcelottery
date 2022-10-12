import { RequestHandler } from "express"
import { CreateDatePlayLotteryI, CreateTikeTicketI, CreateInitialRaffleI } from "../../types"
import DatePlayLotteryModel from "../models/DatePlayLotteryModel"
import Raffle from "../models/RaffleModel"
import Ticket from "../models/TicketModel"

export const getRaffles: RequestHandler = async (_req, res) => {
  try {
    // Padre Raffle
    const raffles = await Raffle.find().populate("ticketsIds").populate("datePlayLotteryIds")
    if (raffles) return res.json(raffles)
    else return res.json([])
  } catch (error) {
    return res.json(error)
  }
}

export const getRaffle: RequestHandler = async () => {
  try {
  } catch (error) {}
}

export const createRaffle: RequestHandler = async (req, res) => {
  try {
    const { title, description, adminId, cant, price, datePlayLottery } = req.body

    const newRaffle = await Raffle.create<CreateInitialRaffleI>({ title, description, adminId, price })

    for (const dateItem of datePlayLottery) {
      const newDatePlayLottery = await DatePlayLotteryModel.create<CreateDatePlayLotteryI>({
        lotteryId: dateItem.lotteryId,
        date: dateItem.date,
        reward: dateItem.reward,
      })
      await newRaffle.updateOne({ $push: { datePlayLotteryIds: newDatePlayLottery._id } })
    }

    for (let i = 0; i < cant; i++) {
      const newTicket = await Ticket.create<CreateTikeTicketI>({ positions: i, raffle: newRaffle._id })
      await newRaffle.updateOne({ $push: { ticketsIds: newTicket._id } })
    }
    await newRaffle.save()
    return res.json(newRaffle)
  } catch (error) {
    return res.json(error)
  }
}

export const updateRaffle: RequestHandler = async () => {
  try {
  } catch (error) {}
}
export const deleteRaffle: RequestHandler = async () => {
  try {
  } catch (error) {}
}
