import { Product } from "../models/Product"
import BaseDatabase from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    private  TABLE_PUSHES = "Labe_Products"
    // public async CreateProductDatabase(products:Product){
    //     await ProductDatabase.connection(this.TABLE_PUSHES).insert({
    //         id:products.getId(),
    //         name:products.getUserId(),
    //         price:products.getProductId(),
    //     })
    // }
    public async getProductById(id:string){
        const result = await ProductDatabase.connection(this.TABLE_PUSHES).select().where({id})
        return result
    }
}