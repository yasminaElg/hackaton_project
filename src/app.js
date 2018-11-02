import express from 'express'
import bodyParser from 'body-parser'
import { systemRouter } from './routes/system';

export const createExpressApp = () => {
  const app = express()

  // Middlewares
  app.use(bodyParser.json())

  // Routes
  app.use('/system', systemRouter())

  return app
}
