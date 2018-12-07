import boom from 'boom'
import {database} from '../database/database'

export const validateID = async (req, res, next) => {
  const hacks = await database.getAll()
  const hack = hacks.find(data => data.id === req.params.id)

  if(!hack) {
    const boomed = boom.notFound(
      'Invalid id ! You should try again with an existing id.'
    )
    return res.status(boomed.output.statusCode).json(boomed.output.payload)
  }

  next()
}