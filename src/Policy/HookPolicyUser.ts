import { getUser } from "../utils/userLocalStore"
import { Roles } from "./Roles"

export const HookPolicyUser = () => {
   const can = (roles: Roles[]): boolean => {
      const user = getUser()
      console.log(roles.includes(user.roleId), "Roles validations")

      return roles.includes(user.roleId)
   }

   return { can, Roles }
}
