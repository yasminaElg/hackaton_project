import expressPromiseRouter from 'express-promise-router'
import {token} from '../constants/token'
import {database} from '../database/database'

export const systemRouter = () => {
  const router = expressPromiseRouter()

  router.get('/ping', (req, res) => res.send('pong'))
  router.get('/login', (req, res) => res.json({token}))


  return router
}
