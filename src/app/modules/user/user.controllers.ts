import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import { User } from '@prisma/client'
import { getUsersService } from './user.services'

export const getUsers = tryCatch(async (req: Request, res: Response) => {
  const result = await getUsersService()

  sendRes<User[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
})
