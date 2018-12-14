import expressPromiseRouter from 'express-promise-router'
import {validateID} from '../middlewares/validateID'
import {validateToken} from '../middlewares/authentication'
import {validateSchema} from '../middlewares/validateSchema'
import {getRepository} from 'typeorm'
import {Hackathon} from '../entities/entityHackathon'

const getAll = (req, res) => {
  const repository = getRepository(Hackathon)
  repository.find().then(data => res.json(data))
}

const getOne = async (req, res) => {
  const repository = getRepository(Hackathon)
  res.json(await repository.findOne(req.params.id))
}

const create = async (req, res) => {
  const repository = getRepository(Hackathon)
  const hack = await repository.create(req.body)
  await repository.save(hack)
  res.json(await repository.find(hack.id))
}

const remove = async (req, res) => {
  const repository = getRepository(Hackathon)
  await repository
    .findOne(req.params.id)
    .then(async data => await repository.remove(data))
  res.status(204).end()
}

const update = async (req, res) => {
  const repository = getRepository(Hackathon)
  await repository.update(req.params.id, req.body)
  res.json(await repository.find(req.params.id))
}

export const hackathonRouter = () => {
  const router = expressPromiseRouter()

  router.get('/', getAll)
  router.get('/:id', validateToken, validateID, getOne)
  router.post('/', validateToken, validateSchema, create)
  router.delete('/:id', validateToken, validateID, remove)
  router.patch('/:id', validateToken, validateID, validateSchema, update)

  return router
}
