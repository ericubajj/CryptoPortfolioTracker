import { DataSource } from "typeorm"
import { User } from "./models/User"
import { Portfolio } from "./models/Portfolio"
import { Asset } from "./models/Asset"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "your_username",
  password: process.env.DB_PASSWORD || "your_password",
  database: process.env.DB_NAME || "crypto_portfolio",
  synchronize: process.env.NODE_ENV !== "production",
  logging: process.env.NODE_ENV !== "production",
  entities: [User, Portfolio, Asset],
  migrations: [],
  subscribers: [],
})

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize()
    console.log("Data Source has been initialized!")
  } catch (err) {
    console.error("Error during Data Source initialization", err)
  }
}