import { Router } from 'express'

import CreateUserService from '../services/CreateUser'
import AppError from '../errors/AppError'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  if (!name || !email || !password) {
    throw new AppError('The attributes email, name and password are required.')
  }

  const createUser = new CreateUserService()
  const user = await createUser.run({ name, email, password })
  delete user.password

  return response.json(user)
})

export default usersRouter
