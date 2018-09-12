import express from 'express'
import bodyParser from 'body-parser'
import { healthRouter } from './routes/health';
import { githubRouter } from './routes/github';
import expressPromiseRouter from 'express-promise-router'

export const createExpressApp = () => {
  const app = express()

  // Middlewares
  app.use(bodyParser.json())

  // Routes
  app.use('/health', healthRouter())
  app.use('/github', githubRouter())
  app.use('/', expressPromiseRouter().get('/', (req, res) => res.send('Home')))

  return app
}
