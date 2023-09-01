import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import { Book } from '@prisma/client'
import { createBookService, getBooksService } from './book.services'

// example controller
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
  const result = await getBooksService()

  sendRes<Book[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched  successfully',
    data: result,
  })
})
