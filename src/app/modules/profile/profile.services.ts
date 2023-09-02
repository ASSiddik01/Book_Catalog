import { User } from '@prisma/client'
import prisma from '../../../utilities/prisma'
import httpStatus from 'http-status'
import { ApiError } from './../../../errorFormating/apiError'
import { returnUser } from '../auth/auth.constants'

export const getProfileService = async (
  user: Partial<User>
): Promise<Partial<User>> => {
  const result = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: returnUser,
  })

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User retrieved failed')
  }
  return result
}
