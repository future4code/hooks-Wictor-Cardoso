import express from "express"

export const userRouter = express.Router();

const orderController = new OrderController();
const pizzaController = new PizzaController();

userRouter.post("/orders", orderController.);
userRouter.get("/orders/:id", orderController.);
userRouter.get("/pizzas", pizzaController)