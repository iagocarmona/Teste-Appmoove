import { Response, Request, Router } from 'express'
import multer from 'multer'
import { readFile } from 'fs'

const multerConfig = multer()
const router = Router()

router.get('/', (req, res) => {
  return res.json({ hello: 'world' })
})

router.post('/users', multerConfig.single('file'), (req, res) => {
  // console.log(request.file?.buffer.toString('utf-8'))
  return res.send()
})

export { router }
