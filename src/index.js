import {createExpressApp} from './app'

const port = 3003
createExpressApp().listen(port, () => {
  console.log(`Server listening on port ${port}!`)
})
