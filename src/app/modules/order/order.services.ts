import { Order } from '@prisma/client'
import prisma from '../../../utilities/prisma'
import httpStatus from 'http-status'
import { ApiError } from './../../../errorFormating/apiError'

export const createOrderService = async (
  userId: string,
  payload: Partial<Order>
): Promise<Order | null> => {
  const { orderedBooks } = payload

  // const data = {
  //   orderedBooks,
  //   userId,
  // }

  // if (orderedBooks) {
  //   try {
  //     for (const orderedBook of orderedBooks) {
  //       const { bookId, quantity } = orderedBook

  //       // Create a new Book record or find an existing one by bookId
  //       const book = await prisma.book.findUnique({
  //         where: { id: bookId },
  //       })

  //       // Create a new Order record or find an existing one
  //       const order = await prisma.order.create({
  //         data: {},
  //       })

  //       // Create an OrderBook record to associate the book with the order
  //       await prisma.orderBook.create({
  //         data: {
  //           quantity,
  //           book: {
  //             connect: { id: book?.id },
  //           },
  //           order: {
  //             connect: { id: order?.id },
  //           },
  //         },
  //       })
  //     }

  //     console.log('Data saved successfully.')
  //   } catch (error) {
  //     console.error('Error saving data:', error)
  //   } finally {
  //     await prisma.$disconnect()
  //   }
  // }

  if (orderedBooks) {
    const orderData = {
      userId: userId, // Replace with the actual user's UUID
      orderedBooks: orderedBooks,
    }
    const result = await prisma.order.create({
      data: orderData,
    })
    return result
  } else {
    throw new ApiError(httpStatus.BAD_GATEWAY, `Order created failed`)
  }

  // const result = await prisma.order.create({
  //   data: {
  //     orderedBooks,
  //     userId,
  //   },
  // })

  // if (!result) {
  //   throw new ApiError(httpStatus.BAD_GATEWAY, `Order created failed`)
  // }
}
