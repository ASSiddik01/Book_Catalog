import { Response } from 'express'
import { IApiRes } from '../interface/apiRes'

export const sendRes = <T>(res: Response, data: IApiRes<T>): void => {
  const resData: IApiRes<T> = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
    token: data.token || null || undefined,
  }
  res.status(data.statusCode).send(resData)
}
