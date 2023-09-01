import express from 'express'
const router = express.Router()
import authRoute from '../modules/auth/auth.routes'
import userRoute from '../modules/user/user.routes'
import categoryRoute from '../modules/category/category.routes'
import bookRoute from '../modules/book/book.routes'
import orderRoute from '../modules/order/order.routes'

const appRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/categories',
    route: categoryRoute,
  },
  {
    path: '/books',
    route: bookRoute,
  },
  {
    path: '/orders',
    route: orderRoute,
  },
]

appRoutes.forEach(route => router.use(route.path, route.route))

export default router
