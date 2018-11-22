import express from 'express'
import bodyParser from 'body-parser'
import {systemRouter} from './routes/system'
import {hackatonRouter} from './routes/hackatons'

export const createExpressApp = () => {
  const app = express()

  // Middlewares
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }));

  // Routes
  app.use('/system', systemRouter())
  app.use('/hackatons', hackatonRouter())

  return app
}
