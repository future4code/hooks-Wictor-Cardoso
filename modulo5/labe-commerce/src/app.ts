import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {v4 as uuidv4, v4} from "uuid"
import connection from "./database/connection";
import { Cadastro } from "./type";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app