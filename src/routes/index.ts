import { Router } from 'express'
import usersRouter from './users'
import sessionsRouter from './sessions'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)

export default routes
