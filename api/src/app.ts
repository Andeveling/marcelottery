import express from "express"
import config from "./config"
import morgan from "morgan"
import cors from "cors"
import * as routes from "../src/routes"

export const app = express()
// CONFIG
app.set("port", config.PORT)

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

// ROUTES
app.use(routes.AdminRoutes)
app.use(routes.AuthRoutes)
app.use(routes.LotteryRoutes)
app.use(routes.RaffleRoutes)
app.use(routes.TicketRoutes)
app.use(routes.ParticipantRoutes)

export default app
