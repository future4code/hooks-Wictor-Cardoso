import { post } from "../types/post";
import BaseDatabase from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public async post (post:post) {
        await BaseDatabase.connection("labook_posts").insert({
            // id: post.id,
            // photo: post.photo,
            // description: post.description,
            // type: post.type,            
            // author_id: post.authorId
            ...post, author_id: post.authorId, created_at: post.createdAt
          });
    }

    public async getPostById(id:string){
        const queryResult:any = await BaseDatabase.connection("labook_posts")
        .select()
        .where({id})
        .join("labook_users","labook_users.id","labook_posts.author_id")
        // const post = {
        //     id: queryResult[0].id,
        //     photo: queryResult[0].photo,
        //     description: queryResult[0].description,
        //     type: queryResult[0].type,
        //     createdAt: queryResult[0].created_at,
        //     authorId: queryResult[0].author_id
        // }        
        // return post
        return queryResult
    }
}