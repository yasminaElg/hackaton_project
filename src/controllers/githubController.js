export const githubController = {
  push: (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
  }
}