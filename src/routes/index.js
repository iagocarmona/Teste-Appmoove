import { Router } from 'express'
import UserController from '../controllers/User'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hello: 'world' })
})

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários da API.
 * /user:
 *   post:
 *     summary: Cria um novo usuário no banco.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       description: Criar um novo usuário.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário.
 *               email:
 *                 type: string
 *                 description: Email do usuário.
 *               phone:
 *                 type: string
 *                 description: Telefone do usuário.
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nome do usuário.
 *                   example: Marcos Felipe
 *                 email:
 *                   type: string
 *                   description: Email do usuário.
 *                   example: marcosfelipe@gmail.com
 *                 phone:
 *                   type: string
 *                   description: Telefone do usuário.
 *                   example: 4499282773
 */

router.post('/user', UserController.store)

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna uma lista paginada de 20 usuários.
 *     description: Retorna uma lista paginada de usuários, por isso deve informar por parâmetro a pagina desejada. Podendo fazer busca de um usuário específico utilizando parêmtros como name e email.
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Página desejada, sendo de 20 em 20 usuários.
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Nome do usuário desejado para pesquisa. Não é obrigatório informar esse campo.
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Email do usuário desejado para pesquisa. Não é obrigatório informar esse campo.
 *     responses:
 *       200:
 *         description: Uma lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do usuário
 *                     example: 00000394-b087-4ca6-a621-56f8eeaa7134
 *                   name:
 *                     type: string
 *                     description: Nome do usuário
 *                     example: César Melo
 *                   email:
 *                     type: string
 *                     description: Email do usuário
 *                     example: Meire50@gmail.com
 *                   phone:
 *                     type: string
 *                     description: Telefone do usuário
 *                     example: (62) 32495-2912
 */
router.get('/users', UserController.index)

export default router
