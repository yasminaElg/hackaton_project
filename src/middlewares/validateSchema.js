import boom from 'boom'
import {hackathonSchema} from '../schema/hackathonSchema'
import Joi from 'joi'

export const validateSchema = async (req, res, next) => {
  const result = Joi.validate(req.body, hackathonSchema, {stripUnknown: {objects:true}})
  if (result.error) {
    const boomed = boom.badRequest(
      'Invalid Hackathon! must contain: title, description, date and address'
    )
    console.log('result.error', result.error)
    return res.status(boomed.output.statusCode).json(boomed.output.payload)
  }
  next()
}
