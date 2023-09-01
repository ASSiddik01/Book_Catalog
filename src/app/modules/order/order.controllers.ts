import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import { createOrderService } from './order.services'

export const createOrder = tryCatch(async (req: Request, res: Response) => {
  const result = await createOrderService(req.user?.id, req.body)
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create Order successfully',
    data: result,
  })
})
