import { Category } from '@prisma/client'
import prisma from '../../../utilities/prisma'
import httpStatus from 'http-status'
import { ApiError } from './../../../errorFormating/apiError'

export const createCategoryService = async (
  data: Category
): Promise<Category | null> => {
  const result = await prisma.category.create({
    data,
  })

  if (!result) {
    throw new ApiError(httpStatus.BAD_GATEWAY, `Category created failed`)
  }

  return result
}

export const getCategoriesService = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany({})
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Categories fetched failed')
  }
  return result
}
