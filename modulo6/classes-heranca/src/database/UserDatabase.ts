import { User } from "../models/User";
import BaseDatabase from "./BaseDatabase";
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDatabase {
   public async getAllUsers(){
    const result = await BaseDatabase.connection(TABLE_USERS).select()
    return result
   }

   public async creatUser(user: User){
       await BaseDatabase.connection(TABLE_USERS).insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
   }

   public async getUserById(id: string){
    const result = await BaseDatabase.connection(TABLE_USERS)
    .select()
    .where({ id })
    return result
   }

}