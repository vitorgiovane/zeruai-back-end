import { Router } from 'express'

import AuthenticateUserService from '../services/AuthenticateUser'

import AppError from '../errors/AppError'

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  if (!email || !password) {
    throw new AppError('The attributes email and password are required.')
  }

  const authenticateUser = new AuthenticateUserService()
  const { user, token } = await authenticateUser.run({ email, password })

  delete user.password

  return response.json({ user, token })
})

export default sessionsRouter
