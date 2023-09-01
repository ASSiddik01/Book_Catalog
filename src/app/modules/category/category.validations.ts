import { z } from 'zod'

// example zod validation schema
export const createCategoryZod = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Z: Category title is required',
    }),
  }),
})
