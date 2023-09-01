import express from 'express'
import { auth } from '../../../middleware/auth'
import { createOrder } from './order.controllers'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

// example route
router.route('/create-order').post(auth(ENUM_USER_ROLE.CUSTOMER), createOrder)

export default router
