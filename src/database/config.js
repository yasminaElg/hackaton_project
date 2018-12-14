import {Hackathon} from '../entities/entityHackathon'

export const dbConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'postgres',
  entities: [Hackathon],
  logging: true,
  synchronize: true,
}
