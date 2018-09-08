import info from '../../package.json'

export const healthController = {
  pong: (req, res) => res.send('pong'),
  info: (req, res) => res.json({name: info.name, description: info.description, author: info.author, version: info.version}),
}