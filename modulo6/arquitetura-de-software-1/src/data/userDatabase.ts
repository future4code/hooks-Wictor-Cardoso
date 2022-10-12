// import { user } from "../types/user";
import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public createUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  public getUserByEmail = async (email: string) => {
    console.log(email);
    try {
      const result = await UserDatabase.connection
        .select("email")
        .where({email})
        .into("User_Arq");
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

// export class UserDatabase extends BaseDatabase {
//   public async createUser(
//     id: string,
//     email: string,
//     name: string,
//     password: string
//   ): Promise<void> {
//     try {
//       await UserDatabase.connection
//         .insert({
//           id,
//           email,
//           name,
//           password,
//         })
//         .into("User_Arq");
//     } catch (error: any) {
//       throw new Error(error.sqlMessage || error.message);
//     }
//   }
// }
