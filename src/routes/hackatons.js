import expressPromiseRouter from 'express-promise-router'
import {database} from '../database/database'
import boom from 'boom'

export const hackatonRouter = () => {
  const router = expressPromiseRouter()

  const getAll = (req, res) => {
    database.getAll().then(data => res.json(data))
  }

  const getOne = async (req, res) => {
    const hack = await checkId(req)
    if (!hack) {
      const boomed = boom.notFound(
        'Invalid id ! You should try again with an existing id.'
      )
      return res.status(boomed.output.statusCode).json(boomed.output.payload)
    } else {
      database.getOne(req.params.id).then(data => res.json(data))
    }
  }

  const create = async (req, res) => {
    const hack = await database.create(req.body)
    res.json(await database.getOne(hack))
  }

  const remove = async (req, res) => {
    const hack = await checkId(req)
    if (hack) {
      database.remove(req.params.id).then(() => getOne(req, res))
    } else {
      const boomed = boom.notFound(
        'Invalid id ! You should try again with an existing id.'
      )
      return res.status(boomed.output.statusCode).json(boomed.output.payload)
    }
  }

  const update = async (req, res) => {
    const hack = await checkId(req)
    if (hack) {
      database.update(req.params.id, req.body).then(() => getOne(req, res))
    } else {
      const boomed = boom.notFound(
        'Invalid id ! You should try again with an existing id.'
      )
      return res.status(boomed.output.statusCode).json(boomed.output.payload)
    }
  }

  const checkId = async req => {
    const hacks = await database.getAll()
    const hack = hacks.find(data => data.id === req.params.id)
    return hack
  }

  router.get('/', getAll)
  router.get('/:id', getOne)
  router.post('/', create)
  router.delete('/:id', remove)
  router.patch('/:id', update)

  return router
}
