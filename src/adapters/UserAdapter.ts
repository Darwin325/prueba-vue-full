import { User } from "../models/user"

export const createUserAdapter = (user: any): User => ({
   id: user.id,
   name: user.name,
   lastName: user.last_name,
   email: user.email,
   age: user.age,
   roleId: user.role_id,
})
