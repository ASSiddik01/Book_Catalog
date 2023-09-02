import express from 'express'
import { auth } from '../../../middleware/auth'
import { getProfile } from './profile.controllers'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router
  .route('/')
  .get(auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), getProfile)

export default router
