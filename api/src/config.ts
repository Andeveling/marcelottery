import dotenv from "dotenv"
dotenv.config()

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mern-database",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "password",
  PORT: process.env.PORT || 3001,
  JWT_TOKEN: process.env.JWT_TOKEN || "secret",
}
