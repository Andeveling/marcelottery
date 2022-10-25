import { RequestHandler } from "express"
import { CreateDatePlayLotteryI, CreateTikeTicketI, CreateInitialRaffleI } from "../../types"
import DatePlayLottery from "../models/DatePlayLotteryModel"
import Raffle from "../models/RaffleModel"
import Ticket from "../models/TicketModel"
import mongoose from "mongoose"

export const getRaffles: RequestHandler = async (_req, res) => {
  try {
    // Padre Raffle
    const raffles = await Raffle.find().populate("datePlayLotteryIds")
    if (raffles) return res.json(raffles)
    else return res.json([])
  } catch (error) {
    return res.status(404).json(error)
  }
}

export const getRaffle: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    if (mongoose.Types.ObjectId.isValid(id)) {
      const raffle = await Raffle.findById(id).populate("ticketsIds")
      return res.json(raffle)
    } else {
      return res.status(404).send("id no valid")
    }
  } catch (error) {
    return res.json(error)
  }
}

export const createRaffle: RequestHandler = async (req, res) => {
  try {
    const { title, description, adminId, cant, price, datePlayLottery } = req.body

    const newRaffle = await Raffle.create<CreateInitialRaffleI>({ title, description, adminId, price })

    for (const dateItem of datePlayLottery) {
      const newDatePlayLottery = await DatePlayLottery.create<CreateDatePlayLotteryI>({
        lotteryId: dateItem.lotteryId,
        raffleId: newRaffle._id,
        date: dateItem.date,
        reward: dateItem.reward,
      })
      await newRaffle.updateOne({ $push: { datePlayLotteryIds: newDatePlayLottery._id } })
    }

    for (let i = 0; i < cant; i++) {
      const newTicket = await Ticket.create<CreateTikeTicketI>({ positions: i, raffleId: newRaffle._id })
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
export const deleteRaffle: RequestHandler = async (req, res) => {
  try {
    const { id: raffleId } = req.params
    await DatePlayLottery.deleteMany({ raffleId })
    await Ticket.deleteMany({ raffleId })
    await Raffle.deleteOne({ _id: raffleId })
    return res.send("Borrado con exito")
  } catch (error) {
    return error
  }
}
