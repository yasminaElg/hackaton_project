import {assoc, dissoc, prop} from 'ramda'
import cuid from 'cuid'

const mockValues = [
  {
    title: 'And... Action ! *Clap*',
    description: "Let's make a lot of Shippr video ! Have fun.",
    date: '2018-10-17T12:00:00.000',
    address: 'Rue des palais, 44, 1030 Bruxelles',
  },
  {
    title: 'Bot it like that !',
    description:
      'We will be making a Bot named MR.COTY who will answer questions.',
    date: '2018-11-14T12:00:00.000',
    address: 'Rue des palais, 44, 1030 Bruxelles',
  },
  {
    title: 'Christmas !',
    description:
      'We will be making a Bot named MR.COTY who will answer questions.',
    date: '2018-12-14T12:00:00.000',
    address: 'Rue des palais, 44, 1030 Bruxelles',
  }
]

export const createMocks = () =>
  mockValues.reduce((acc, mock) => {
    const id = cuid()
    return {
      ...acc,
      [id]: {...mock, id},
    }
  }, {})

export const database = {
  values: {...createMocks()},
  getAll: () => Promise.resolve(Object.values(database.values)),
  getOne: id => Promise.resolve(prop(id, database.values)),
  create: data => {
    const id = cuid()
    database.values = assoc(id, {...data, id}, database.values)
    return Promise.resolve(id)
  },
  remove: id => {
    database.values = dissoc(id, database.values)
    return Promise.resolve(true)
  },
  update: (id, data) => {
    database.values = assoc(id, {...data, id}, database.values)
    return Promise.resolve(true)
  },
}
