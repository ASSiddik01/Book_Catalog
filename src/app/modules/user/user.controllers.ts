import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import { User } from '@prisma/client'
import { getUserService, getUsersService } from './user.services'

export const getUsers = tryCatch(async (req: Request, res: Response) => {
  const result = await getUsersService()

  sendRes<User[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
})

export const getUser = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await getUserService(id)

  sendRes<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  })
})
