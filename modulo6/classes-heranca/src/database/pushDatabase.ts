import { Purchase } from "../models/Purchase";
import BaseDatabase from "./BaseDatabase";

export class PushDatabase extends BaseDatabase {
    private  TABLE_PUSHES = "Labe_Purchases"
    public async CreatePushesDatabase(pushes:Purchase){
        await PushDatabase.connection(this.TABLE_PUSHES).insert({
            id:pushes.getId(),
            user_id:pushes.getUserId(),
            product_id:pushes.getProductId(),
            quantity:pushes.getQuantity(),
            total_price:pushes.getTotalPrice()
        })
    }
}