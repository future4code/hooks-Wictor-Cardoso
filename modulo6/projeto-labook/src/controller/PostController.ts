import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    async create (req: Request, res: Response): Promise<void>{
        try {
           const {photo, description, type, author_id} = req.body

        const postBusiness = new PostBusiness()
        await postBusiness.create(photo, description, type, author_id)
        } catch (error:any) {
        res.status(400).send(error.message) 
        }
    }
}