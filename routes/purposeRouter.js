import {Router} from 'express'
import { purpose } from '../controllers/purposecontroller.js'
export const purposeRouter = Router()


purposeRouter.post("/dropdown",purpose)
