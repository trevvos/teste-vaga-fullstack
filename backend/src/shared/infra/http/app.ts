import "reflect-metadata"
import "express-async-errors"
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import "../container"
import { router } from './routes'
import { errorMiddleware } from "./middlewares/error"

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.use(errorMiddleware)

export { app }