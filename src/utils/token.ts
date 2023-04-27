import { Token } from "../models/user"

export const setToken = ( token: Token ) => {
   if (localStorage.getItem( 'token' ) == null) {
      localStorage.setItem( 'token', token as string )
   }
}

export const getToken = (): Token => {
   return localStorage.getItem( 'token' )
}

export const removeToken = () => {
   localStorage.removeItem( 'token' )
}