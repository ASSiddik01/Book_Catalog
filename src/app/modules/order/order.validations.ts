
import { z } from 'zod'

// example zod validation schema
export const createOrderZod = z.object({
  body: z.object({
    key: z.string({
      required_error: 'Z: Key name is required',
    }),
  }),
})
