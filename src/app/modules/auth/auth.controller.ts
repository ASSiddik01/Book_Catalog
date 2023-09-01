import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import { User } from '@prisma/client'
import { signUpService } from './auth.service'

export const signUp = tryCatch(async (req: Request, res: Response) => {
  const result = await signUpService(req.body)
  sendRes<Partial<User>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  })
})
