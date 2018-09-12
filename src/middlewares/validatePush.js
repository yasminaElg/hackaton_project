import { github } from "../constants/github";
import { runInNewContext } from "vm";

export const validatePush = (req, res, next) => {
  const {body} = req

  if(body.repository && !body.pusher) {
    console.log("Not push but OK")
    return res.sendStatus(200)
  }
  if(github.user !== body.pusher.name || !github.repositories.find(({name}) => name === body.repository.name)) {
    console.log("Unauthorized")
    return res.sendStatus(401)
  }

  return next()
} 