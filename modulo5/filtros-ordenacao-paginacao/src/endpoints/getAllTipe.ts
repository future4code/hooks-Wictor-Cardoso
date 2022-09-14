import { Request, Response } from "express"
import { connection } from "../data/connection"


export async function getAllTipes(
   req: Request,
   res: Response
): Promise<void> {
   let statusCode = 400
   try {
      let type = req.params.type as string

      if (!type) {
         type = "%"
      }

      const result = await connection("aula48_exercicio")
         .where("type", "like", `%${type}%`)


      if (result.length < 1) {
         statusCode = 404
         throw new Error("Nome não encontrado")
      }    

      res.status(200).send(result)

   } catch (error: any) {
      res.status(statusCode).send(error.message)
   }
}

