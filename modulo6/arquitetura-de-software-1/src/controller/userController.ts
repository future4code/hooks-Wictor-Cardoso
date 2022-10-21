import { UserDatabase } from "../data/userDatabase";
import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";

export class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const input = {
        id:Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      await new UserBusiness().createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
