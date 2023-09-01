import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import { createCategoryService } from './category.services'
import { Category } from '@prisma/client'

export const createCategory = tryCatch(async (req: Request, res: Response) => {
  const result = await createCategoryService(req.body)

  sendRes<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  })
})
