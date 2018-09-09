import { github } from "../constants/github";
import { runInNewContext } from "vm";

export const validatePush = (req, res, next) => {
  const {body} = req

  if(github.user !== body.pusher.name || !github.repositories.find(({name}) => name === body.repository.name)) {
    console.log("Unauthorized")
    return res.sendStatus(401)
  }

  return next()
} 