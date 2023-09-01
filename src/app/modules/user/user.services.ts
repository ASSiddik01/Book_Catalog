/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma, User } from '@prisma/client'
import prisma from '../../../utilities/prisma'
import bcrypt from 'bcrypt'
import config from '../../../config'
import httpStatus from 'http-status'
import { IPaginationOptions } from '../../../interface/pagination'
import { IUserFilters } from './user.interfaces'
import { IGenericResponse } from '../../../interface/common'
import { calculatePagination } from '../../../helpers/paginationHelper'
import { userSearchableFields } from './user.constants'
import { ApiError } from '../../../errorFormating/apiError'

export const getUsersService = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({})
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Users retrieved failed')
  }
  return result
}
