import Lottery from "../models/LotteryModel"
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
    const newLottery = await Lottery.create({ title })
    res.json(newLottery)
  } catch (error) {
    res.status(400).json(error)
  }
}
export const deleteLottery: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    await Lottery.findByIdAndDelete(id)
    return res.send("Done!")
  } catch (error) {
    return res.json(error)
  }
}
