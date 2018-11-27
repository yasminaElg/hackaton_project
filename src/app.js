import express from 'express'
import bodyParser from 'body-parser'
import {systemRouter} from './routes/system'
import {hackatonRouter} from './routes/hackatons'
import cors from 'cors'


export const createExpressApp = () => {

  const app = express()
  app.use(
    cors({
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['Authorization'],
    })
  )
  // Middlewares
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }));

  // Routes
  app.use('/system', systemRouter())
  app.use('/hackatons', hackatonRouter())

  return app
}
