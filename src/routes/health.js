import expressPromiseRouter from 'express-promise-router'
import { healthController } from '../controllers/healthController';


export const healthRouter = () => {
  const router = expressPromiseRouter()

  router.get('/ping', healthController.pong)
  router.get('/info', healthController.info)

  return router
}