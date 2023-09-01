import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { auth } from '../../../middleware/auth'
import { createCategoryZod } from './category.validations'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { createCategory, getCategories } from './category.controllers'

const router = express.Router()

router
  .route('/create-category')
  .post(
    auth(ENUM_USER_ROLE.ADMIN),
    reqValidate(createCategoryZod),
    createCategory
  )

router.route('/').get(getCategories)

export default router
