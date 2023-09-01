import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { signUp } from './auth.controllers'
import { signUpZod } from './auth.validations'

const router = express.Router()

router.route('/signup').post(reqValidate(signUpZod), signUp)

export default router
