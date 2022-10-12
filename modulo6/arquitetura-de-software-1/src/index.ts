import {app} from "./app"
import { UserController } from "./controller/userController"

app.post("/user", new UserController().createUser)


