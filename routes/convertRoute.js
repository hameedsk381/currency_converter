import {Router} from 'express'
import { convertCurrency } from '../controllers/convertcontroller.js'
export const router = Router()


router.post("/usd",convertCurrency)
