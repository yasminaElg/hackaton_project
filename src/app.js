import express from 'express'
import bodyParser from 'body-parser'
import { healthRouter } from './routes/health';
import { githubRouter } from './routes/github';

export const createExpressApp = () => {
  const app = express()

  // Middlewares
  app.use(bodyParser.json())

  // Routes
  app.use('/health', healthRouter())
  app.use('/github', githubRouter())

  return app
}
