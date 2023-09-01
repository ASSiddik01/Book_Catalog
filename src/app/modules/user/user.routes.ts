import express from 'express'
import { auth } from '../../../middleware/auth'
import { getUser, getUsers, updateUser } from './user.controllers'
import { ENUM_USER_ROLE } from '../../../enums/user'
import reqValidate from '../../../middleware/reqValidate'
import { updateUserZod } from './user.validations'

const router = express.Router()

// example route
router.route('/').get(auth(ENUM_USER_ROLE.ADMIN), getUsers)

router
  .route('/:id')
  .get(auth(ENUM_USER_ROLE.ADMIN), getUser)
  .patch(auth(ENUM_USER_ROLE.ADMIN), reqValidate(updateUserZod), updateUser)

export default router
