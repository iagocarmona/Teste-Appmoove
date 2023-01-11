import { Router } from 'express'

// controllers
import UserController from './controllers/User'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hello: 'world' })
})

router.post('/user', UserController.store)
router.get('/user/users', UserController.index)

router.get('/user/search/?name=:name&?email=:email', UserController.index)
router.get('/user/search/?email=:email', UserController.index)
router.get('/user/search/?name=:name', UserController.index)

export { router }
