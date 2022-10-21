import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { invalidRequest } from "../error/InvalidRequest";
import { UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/generateId";

export class UserBusiness {
   public createUser = async (input: UserInputDTO) => {
      try {
         const { name, nickname, email, password } = input

         if (
            !name ||
            !nickname ||
            !email ||
            !password
         ) {
            throw new invalidRequest()
         }

if (!email.includes("@")){
   throw new InvalidEmail()
}

if(name < )

         const id: string = generateId()

         const userDatabase = new UserDatabase()

         await userDatabase.insertUser({
            id,
            name,
            nickname,
            email,
            password
         })

      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message || error.sqlMessage)
      }
   }
}
