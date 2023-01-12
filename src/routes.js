import { Router } from 'express'

// controllers
import UserController from './controllers/User'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hello: 'world' })
})

router.post('/user', UserController.store)

router.get('/user', UserController.index)

export { router }
