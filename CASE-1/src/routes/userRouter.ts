import express from "express"

export const apiRouter = express.Router();

const orderController = new OrderController();
const pizzaController = new PizzaController();

apiRouter.post("/orders", orderController.);
apiRouter.get("/orders/:id", orderController.);
apiRouter.get("/pizzas", pizzaController)