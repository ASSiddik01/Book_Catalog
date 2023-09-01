import prisma from '../../../utilities/prisma'
import bcrypt from 'bcrypt'
import { User } from '@prisma/client'

export const isExist = async (payload: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      email: payload,
    },
  })

  return result
}

export const isPasswordMatched = async (
  givenPassword: string,
  savedPassword: string
) => {
  return await bcrypt.compare(givenPassword, savedPassword)
}
