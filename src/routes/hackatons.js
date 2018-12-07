import expressPromiseRouter from 'express-promise-router'
import {database} from '../database/database'
import {validateID} from '../middlewares/validateID'
import {validateToken} from '../middlewares/authentication'

const getAll = (req, res) => {
  database.getAll().then(data => res.json(data))
}

const getOne = async (req, res) => {
  const data = await database.getOne(req.params.id)
  res.json(data)
}

const create = async (req, res) => {
  const id = await database.create(req.body)
  res.json(await database.getOne(id))
}

const remove = async (req, res) => {
  await database.remove(req.params.id)
  res.status(204).end()
}

const update = async (req, res) => {
  await database.update(req.params.id, req.body)
  res.json(await database.getOne(req.params.id))
}

export const hackatonRouter = () => {
  const router = expressPromiseRouter()

  router.get('/', getAll)
  router.get('/:id', validateToken, validateID, getOne)
  router.post('/', validateToken, create)
  router.delete('/:id', validateToken, validateID, remove)
  router.patch('/:id', validateToken, validateID, update)

  return router
}
