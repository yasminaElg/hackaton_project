import expressPromiseRouter from 'express-promise-router'
import {token} from "../constants/token";
import {validateAuth} from "../middlewares/authentication";

export const systemRouter = () => {
  const router = expressPromiseRouter()

  router.get('/ping', validateAuth, (req, res) => res.send('pong'))
  router.get('/login', (req, res) => res.json({token}))

  return router
}