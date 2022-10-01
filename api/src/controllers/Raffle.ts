import Raffle from "../models/Raffle"
import Ticket from "../models/Ticket"
import { RequestHandler } from "express"

export const getRaffles: RequestHandler = async () => {
  try {
  } catch (error) {}
}

export const getRaffle: RequestHandler = async () => {
  try {
  } catch (error) {}
}

export const createRaffle: RequestHandler = async (req, res) => {
  try {
    const { lottery, datePlay, reward, admin, cant } = req.body
    const newRaffle = await Raffle.create({ lottery, datePlay, reward, admin })

    for (let i = 0; i < cant; i++) {
      const newTicket = await Ticket.create({ positions: i, raffle: newRaffle._id })
      await newRaffle.updateOne({ $push: { tickets: newTicket } })
    }

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
