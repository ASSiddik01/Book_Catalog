import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { auth } from '../../../middleware/auth'
import { createBookZod } from './book.validations'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { createBook, getBook, getBooks } from './book.controllers'

const router = express.Router()

// example route
router
  .route('/create-book')
  .post(auth(ENUM_USER_ROLE.ADMIN), reqValidate(createBookZod), createBook)

router.route('/').get(getBooks)

router.route('/:id').get(getBook)

export default router
