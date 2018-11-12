import boom from 'boom'
import {token} from '../constants/token'

export const validateToken = (req, res, next) => {
  if (req.headers.authorization !== token) {
    const boomed = boom.unauthorized(
      'Invalid token ! You should add the authentication token to the authorization headers.'
    )
    return res.status(boomed.output.statusCode).json(boomed.output.payload)
  }
  next()
}
