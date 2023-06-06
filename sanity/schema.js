import { userSchema } from './userSchema'
import { ridesSchema } from './rideSchema'
import { tripSchema } from './tripSchema'

export const schema = {
  types: [userSchema, ridesSchema, tripSchema],
}
