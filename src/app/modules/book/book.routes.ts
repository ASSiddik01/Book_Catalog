import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { auth } from '../../../middleware/auth'
import { createBookZod } from './book.validations'
import { ENUM_USER_ROLE } from '../../../enums/user'
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from './book.controllers'

const router = express.Router()

// example route
router
  .route('/create-book')
  .post(auth(ENUM_USER_ROLE.ADMIN), reqValidate(createBookZod), createBook)

router.route('/').get(getBooks)

router
  .route('/:id')
  .get(getBook)
  .patch(auth(ENUM_USER_ROLE.ADMIN), updateBook)
  .delete(auth(ENUM_USER_ROLE.ADMIN), deleteBook)

export default router
