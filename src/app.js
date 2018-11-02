import express from 'express'
import bodyParser from 'body-parser'
import { healthRouter } from './routes/health';

export const createExpressApp = () => {
  const app = express()

  // Middlewares
  app.use(bodyParser.json())

  // Routes
  app.use('/health', healthRouter())

  return app
}
