import { Category } from '@prisma/client'
import prisma from '../../../utilities/prisma'
import httpStatus from 'http-status'
import { ApiError } from './../../../errorFormating/apiError'
import { booksPopulate } from './category.constants'

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

export const getCategoriesService = async (): Promise<Category[] | null> => {
  const result = await prisma.category.findMany({
    include: booksPopulate,
  })
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Categories fetched failed')
  }
  return result
}

export const getCategoryService = async (
  id: string
): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: booksPopulate,
  })

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category fetched failed')
  }

  return result
}

export const updateCategoryService = async (
  id: string,
  payload: Partial<Category>
): Promise<Partial<Category>> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  })

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Category update failed')
  }
  return result
}

export const deleteCategoryService = async (
  id: string
): Promise<Partial<Category>> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  })

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Category delete failed')
  }
  return result
}
