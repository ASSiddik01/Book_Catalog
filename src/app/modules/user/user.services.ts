/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client'
import prisma from '../../../utilities/prisma'
import httpStatus from 'http-status'
import { ApiError } from '../../../errorFormating/apiError'

export const getUsersService = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({})
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Users retrieved failed')
  }
  return result
}

export const getUserService = async (id: string): Promise<User> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User retrieved failed')
  }
  return result
}
