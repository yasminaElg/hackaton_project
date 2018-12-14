import boom from 'boom'
import {getRepository} from 'typeorm'
import {Hackathon} from '../entities/entityHackathon'


export const validateID = async (req, res, next) => {
  const repository = getRepository(Hackathon)
  const hack = repository.findOne({id:req.params.id})

  if(!hack) {
    const boomed = boom.notFound(
      'Invalid id ! You should try again with an existing id.'
    )
    return res.status(boomed.output.statusCode).json(boomed.output.payload)
  }

  next()
}