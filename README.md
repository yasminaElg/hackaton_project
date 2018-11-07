# PiouPiou Backend

## Setup
- Clone this repo
- run `yarn` to install dependencies
- Run the backend on `http://localhost:3003 with `yarn start`
- if `http://localhost:3003/system/ping` respond with `pong`, the backend is running correctly

## Features
- A test route `/system/ping`
- An authentication middleware `src/middlewares/authentication`
- A token providing route : `/system/login`
- An in-memory DB which can performs all 5 CRUDL actions

## In-memory DB
This project provides you a little in-memory DB (stored in a variable).
You will use it to created your first routes (see the guide).

Take care, since it's stored in a variable, it will reset everytime the backend reloads (including nodemon's auto reload on save)
The database comes preloaded with 2 mock hackatons so you don't have to add every time the DB reloads.

The database, `import {database} from '../database/database'`, comes with 5 functions :

- `getAll()` : returns an array containing all db values
- `getOne(id)` : returns the value which has the provided `id`
- `create(data)` : creates a value with the provided `data`
- `remove(id)` : removes the value associated with the provided `id`
- `update(id, data)` : replace the value with the associated `id` with the provided `data

The database don't check for data format, it's your responsability to validate the incoming data with a library like JOI (see the guide for when to add validation)

## Run the DB

Use `docker-compose up`

## TypeORM config

Use `src/database/config.js`