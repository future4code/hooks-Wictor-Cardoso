import moment from "moment";
import { PostDatabase } from "../data/PostDatabase";
import { generateId } from "../services/generateId";
import { POST_TYPES } from "../types/enumPost";
import { post } from "../types/post";

export class PostBusiness {
    async create(photo: string, description: string, type: POST_TYPES, author_id: string) {
        const post:post = {
         id:generateId(),
        photo,
        description,
        type,
        createdAt:moment().calendar(),
        authorId: author_id            
        };

        const postDatabase = new PostDatabase()
        await postDatabase.create(post);
    }
}