export type Token = string | null

export interface UserLogin {
   email: string,
   password: string
}

export interface User {
   id: number,
   name: string,
   lastName: string,
   email: string,
   age: number,
}

export interface Passwords {
   password: string,
   password_confirmation: string
}

export interface UserRegister extends Passwords {
   name: string,
   email: string,
}