import express from 'express'
import { healthRouter } from './routes/health';

export const createExpressApp = () => {
  const app = express()

  app.use('/health', healthRouter())

  return app
}
