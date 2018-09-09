import { exec } from "child_process";
import { github } from "../constants/github";

export const githubController = {
  push: (req, res) => {
    github.repositories.forEach(({path}) => {
      console.log(`User ${req.body.pusher.name} just pushed to repository ${req.body.repository.name}`)
      exec(`git -C ${path} reset --hard`)
      exec(`git -C ${path} pull -f`)
      exec(`npm -C ${path} run start`)
    })

    res.end()
  }
}