import { Request, Response } from "express"
import { PushDatabase } from "../database/pushDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        // const findUser = await connection(TABLE_USERS)
        // .select()
        // .where({ id: userId })
        const userDatabase = new UserDatabase()
        const findUser = await userDatabase.getUserById(userId)

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const productDatabase = new UserDatabase()
        const findProduct = await productDatabase.getUserById(userId)

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        // const product: Product = {
        //     id: findProduct[0].id,
        //     name: findProduct[0].name,
        //     price: findProduct[0].price
        // }

        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )

        // const newPurchase: Purchase = {
        //     id: Date.now().toString(),
        //     userId,
        //     productId,
        //     quantity,
        //     totalPrice: product.getPrice() * quantity
        // }

        const purchase = new Purchase(
            Date.now().toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )

        const pushDatabase = new PushDatabase()
        await pushDatabase.CreatePushesDatabase(purchase)
        // await 
        // connection(TABLE_PURCHASES).insert({
        //     id: purchase.getId(),
        //     user_id: purchase.getUserId(),
        //     product_id: purchase.getProductId(),
        //     quantity: purchase.getQuantity(),
        //     total_price: purchase.getTotalPrice()
        // })

        res.status(201).send({ message: "Compra registrada", purchase: purchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}