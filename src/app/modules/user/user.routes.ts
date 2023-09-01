import express from 'express'
import { auth } from '../../../middleware/auth'
import { getUser, getUsers } from './user.controllers'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

// example route
router.route('/').get(auth(ENUM_USER_ROLE.ADMIN), getUsers)

router.route('/:id').get(auth(ENUM_USER_ROLE.ADMIN), getUser)

export default router
