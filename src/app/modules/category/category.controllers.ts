import { Request, Response } from 'express'
import { tryCatch } from '../../../utilities/tryCatch'
import { sendRes } from '../../../utilities/sendRes'
import httpStatus from 'http-status'
import {
  createCategoryService,
  deleteCategoryService,
  getCategoriesService,
  getCategoryService,
  updateCategoryService,
} from './category.services'
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

export const getCategories = tryCatch(async (req: Request, res: Response) => {
  const result = await getCategoriesService()

  sendRes<Category[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories fetched  successfully',
    data: result,
  })
})

export const getCategory = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await getCategoryService(id)

  sendRes<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully',
    data: result,
  })
})

export const updateCategory = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await updateCategoryService(id, req.body)

  sendRes<Partial<Category>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  })
})

export const deleteCategory = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await deleteCategoryService(id)

  sendRes<Partial<Category>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category delete successfully',
    data: result,
  })
})
