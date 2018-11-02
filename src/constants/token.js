import crypto from 'crypto'

export const token = crypto.randomBytes(64).toString('hex')