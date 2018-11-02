import boom from 'boom'
import {token} from "../constants/token";

export const validateAuth = (req, res, next) => {
  console.log('req.headers', req.headers)
  if(req.headers.authorization !== token) {
    const boomed = boom.unauthorized('Invalid token !')
    return res.status(boomed.output.statusCode).json(boomed.output.payload)
  }
  next()
}