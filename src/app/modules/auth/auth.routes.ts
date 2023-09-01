import express from 'express'
import reqValidate from '../../../middleware/reqValidate'
import { signIn, signUp } from './auth.controllers'
import { signInZod, signUpZod } from './auth.validations'

const router = express.Router()

router.route('/signup').post(reqValidate(signUpZod), signUp)

router.route('/signin').post(reqValidate(signInZod), signIn)

export default router
