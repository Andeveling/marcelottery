import Lottery from "@/models/Lottery"
import { RequestHandler } from "express"

export const getLotteries: RequestHandler = async (_req, res) => {
  try {
    const allLotteries = await Lottery.find()
    return res.json(allLotteries)
  } catch (error) {
    return res.json(error)
  }
}
export const getLottery: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    const findLottery = await Lottery.findById(id)
    if (findLottery) {
      return res.json(findLottery)
    }
    return res.json({ msg: "No found" })
  } catch (error) {
    return res.json(error)
  }
}
export const createLottery: RequestHandler = async (req, res) => {
  try {
    const { title } = req.body
    const newLottery = Lottery.create({ title })
    return res.json(newLottery)
  } catch (error) {
    return res.json(error)
  }
}
export const deleteLottery: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    const findLottery = await Lottery.findById(id)
    if (findLottery) {
      res.json({ msg: `Lottery ${findLottery.title} borrada con exito` })
      await findLottery.delete()
      return
    } else {
      return res.json({ msg: `Lottery ${id} no encontrada` })
    }
  } catch (error) {
    return res.json(error)
  }
}
