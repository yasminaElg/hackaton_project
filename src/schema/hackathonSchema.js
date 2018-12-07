import Joi from 'joi'

export const hackathonSchema = Joi.object().keys({
  title: Joi.string()
    .required(),
  description: Joi.string()
    .required(),
  date: Joi.string()
    .isoDate()
    .required(),
  address: Joi.string()
    .required(),
})
