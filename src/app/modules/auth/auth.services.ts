import { User } from '@prisma/client'
import prisma from '../../../utilities/prisma'
import bcrypt from 'bcrypt'
import config from '../../../config'
import httpStatus from 'http-status'
import { ApiError } from '../../../errorFormating/apiError'
import { isExist } from './auth.utils'

export const signUpService = async (
  data: User
): Promise<Partial<User> | null> => {
  // existency check
  const [email] = await Promise.all([isExist(data.email)])

  if (email) {
    throw new ApiError(httpStatus.BAD_REQUEST, `Email already exist`)
  }

  // save new user
  const { password } = data
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_solt_round)
  )
  data.password = hashedPassword

  const result = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  })

  if (!result) {
    throw new Error(`User create failed`)
  }

  return result
}
