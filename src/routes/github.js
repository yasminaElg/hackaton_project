import expressPromiseRouter from 'express-promise-router'
import { githubController } from '../controllers/githubController';

export const githubRouter = () => {
  const router = expressPromiseRouter()

  router.post('/', githubController.push)

  return router
}