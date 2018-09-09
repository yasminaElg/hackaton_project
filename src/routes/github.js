import expressPromiseRouter from 'express-promise-router'
import { githubController } from '../controllers/githubController';
import { validatePush } from '../middlewares/validatePush';

export const githubRouter = () => {
  const router = expressPromiseRouter()

  router.post('/', validatePush, githubController.push)

  return router
}