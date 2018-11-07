export const dbConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'postgres',
  entities: [
    // Add entities here
  ],
  logging: true,
  synchronize: true,
}
