import { z } from 'zod'

export const createCategoryZod = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Z: Category title is required',
    }),
  }),
})
