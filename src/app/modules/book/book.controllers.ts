import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import { Book } from '@prisma/client'
import {
  createBookService,
  deleteBookService,
  getBookService,
  getBooksService,
  updateBookService,
} from './book.services'
import { pick } from '../../../utilities/pick'
import { paginationFields } from '../../../constants/pagination'
import { bookFilterableFields } from './book.constants'

export const createBook = tryCatch(async (req: Request, res: Response) => {
  const result = await createBookService(req.body)
  sendRes<Book>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})

export const getBooks = tryCatch(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields)
  const filters = pick(req.query, bookFilterableFields)

  const result = await getBooksService(paginationOptions, filters)

  // sendRes<Book[]>(res, {
  //   statusCode: httpStatus.OK,
  //   success: true,
  //   message: 'Book fetched  successfully',
  //   data: result,
  // })
  sendRes<Book[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched  successfully',
    meta: result.meta,
    data: result.data,
  })
})

export const getBook = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await getBookService(id)

  sendRes<Book>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched successfully',
    data: result,
  })
})

export const updateBook = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await updateBookService(id, req.body)

  sendRes<Partial<Book>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  })
})

export const deleteBook = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await deleteBookService(id)

  sendRes<Partial<Book>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book delete successfully',
    data: result,
  })
})
