import express, { query } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as uuid } from "uuid";
import { users } from "./data";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

// endpoint teste
app.get("/test", (req, res) => {
  res.send("tudo ok!");
});

// Ex1 ===================================
// a) Metodo REST
// b) users é a entidade, com o .get
app.get("/users", (req, res) => {
  res.send(users);
});

// Ex2 ===================================
// app.get("/users/type", (req, res) => {
//   const filtredUsers = users.filter((index)=>{
//     return index.type === "ADMIN"
//   })
//   res.send(filtredUsers)
// });

app.get("/users/type/:type", (req, res) => {
  let param = req.params.type;
  if (!param) {
    res.status(404).send("Faltando ou indefinido")
  }

  if (param !== "ADMIN" && "NORMAL") {
    param = "NORMAL";
  }

  const filtredUsers = users.filter((index) => index.type === param);
  res.send(filtredUsers);
});

// Ex3 ===================================
app.get("/users/name/:name", (req, res) => {
  let params = req.params.name;
  // if(!params){
  //   res.send("Falta o parâmetro")
  // }

  const userFiltred = users.filter((i) => {
    return i.name === params;
  });

//   if(!params) {
//     return res.status(400).send("Entre com userId válido.")
//  } else if(userFiltred.length === 0) {
//     return res.status(400).send("Nenhum resultado encontrado.")
//  }

  res.status(201).send(userFiltred)   
});

// Ex4 ===================================

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
