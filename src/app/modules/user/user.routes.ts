import express from 'express'
import { auth } from '../../../middleware/auth'
import { getUsers } from './user.controllers'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

// example route
router.route('/').get(auth(ENUM_USER_ROLE.ADMIN), getUsers)

export default router
