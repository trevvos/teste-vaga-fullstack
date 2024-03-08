import { Router } from 'express'
import { movimentosRoutes } from './movimentos.routes'

const router = Router()

router.use('/movimentos', movimentosRoutes)

export { router }