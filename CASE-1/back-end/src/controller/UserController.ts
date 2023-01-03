import { Request, Response } from "express";

export class UserController {
    constructor () {}

    async signupController(req: Request, res: Response) {
        try {
            
        } catch (error: any) {
            res.status(error.statusCode).send(error.message);
          }
    }

}