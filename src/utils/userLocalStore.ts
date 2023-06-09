import { User } from "../models/user"

export const setUser = (user: User) => {
   localStorage.setItem("user", JSON.stringify(user))
}

export const getUser = (): User => {
   const user = localStorage.getItem("user")
   return user ? JSON.parse(user) : null
}

export const removeUser = () => {
   localStorage.removeItem("user")
}
