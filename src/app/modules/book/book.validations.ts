import { z } from 'zod'

export const createBookZod = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Z: Book title is required',
    }),
    author: z.string({
      required_error: 'Z: Author name is required',
    }),
    genre: z.string({
      required_error: 'Z: Genre is required',
    }),
    price: z.number({
      required_error: 'Z: Price is required',
    }),
    publicationDate: z.string({
      required_error: 'Z: Publication date is required',
    }),
    categoryId: z.string({
      required_error: 'Z: Category id is required',
    }),
  }),
})
