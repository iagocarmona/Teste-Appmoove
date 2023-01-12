import express from 'express'
import router from './routes'
import swaggerJSDoc from 'swagger-jsdoc'
import SwaggerUi from 'swagger-ui-express'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Documentação da API - Teste Back-end AppMoove',
    version: '1.0.0',
    description:
      'Esta é uma REST API com Express. Melhorando a visualização das rotas.',
  },
}

const options = {
  swaggerDefinition,
  apis: ['src/routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

const app = express()

app.use('/api', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
