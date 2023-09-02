import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import {
  createOrderService,
  getOrderService,
  getOrdersService,
} from './order.services'
import { Order, User } from '@prisma/client'

export const createOrder = tryCatch(async (req: Request, res: Response) => {
  const result = await createOrderService(req.user?.id, req.body)
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create Order successfully',
    data: result,
  })
})

export const getOrders = tryCatch(async (req: Request, res: Response) => {
  const result = await getOrdersService(req.user as Partial<User>)

  sendRes<Order[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders fetched  successfully',
    data: result,
  })
})

export const getOrder = tryCatch(async (req: Request, res: Response) => {
  const { orderId } = req.params
  const result = await getOrderService(req.user as Partial<User>, orderId)

  sendRes<Order>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order fetched successfully',
    data: result,
  })
})
