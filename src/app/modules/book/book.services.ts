import prisma from '../../../utilities/prisma'
import httpStatus from 'http-status'
import { ApiError } from './../../../errorFormating/apiError'
import { Book } from '@prisma/client'
import { categoryPolulate } from './book.constants'

export const createBookService = async (data: Book): Promise<Book | null> => {
  const result = await prisma.book.create({
    data,
    include: categoryPolulate,
  })

  if (!result) {
    throw new ApiError(httpStatus.BAD_GATEWAY, `Book created failed`)
  }

  return result
}

export const getBooksService = async (): Promise<Book[] | null> => {
  const result = await prisma.book.findMany({ include: { category: true } })
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book fetched failed')
  }
  return result
}

export const getBookService = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  })

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book fetched failed')
  }

  return result
}

export const updateBookService = async (
  id: string,
  payload: Partial<Book>
): Promise<Partial<Book>> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  })

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Book update failed')
  }
  return result
}

export const deleteBookService = async (id: string): Promise<Partial<Book>> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  })

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Book delete failed')
  }
  return result
}
