import { app } from "./app"
import { taskRouter } from "./routes/taskRouter"
import { userRouter } from "./routes/userRouter"


app.use("/user", userRouter)

app.use("/task", taskRouter)


