import {createExpressApp} from './app'
import {createConnection} from 'typeorm'
import {dbConfig} from './database/config'

createConnection(dbConfig).then(() => {
  const port = 3003
  createExpressApp().listen(port, () => {
    console.log(`Server listening on port ${port}!`)
  })

})
