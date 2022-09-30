import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { typeUser } from "./types";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

let errorCode = 400;

// Postar novo usuário
app.post("/users", async (req, res) => {
 errorCode = 400;
  try {
    const { name, nickname, email } = req.body;

    if (!name || !nickname || !email) {
      throw new Error("Passe o nome, apelido e email");
    }

    if(name.length < 4){
      throw new Error ("O nome deve conter ao menos 4 letras.")
    }

    if(!email.includes("@")){
      throw new Error ("E-mail invalido!")
    }

    const novoUser: typeUser = {
      id: Number(Date.now()),
      name,
      nickname,
      email,
    };

    await connection.raw(`
    INSERT INTO todolist(id, name, nickname, email)
    VALUES(${novoUser.id}, "${novoUser.name}", "${novoUser.nickname}", "${novoUser.email}")
    `);

    res.status(200).send("Usuario adicionado com sucesso");
  } catch (error) {
    res.status(errorCode).send(error);
  }
});
// ======================================================================

// Pegar usuário pelo ID
app.get("/users", async(req, res)=>{
 errorCode = 400
  
  try {
    const id = req.query.id

    if(id){
      const result = await connection.raw(`
        SELECT * FROM todolist
        WHERE id = "${id}";
      `)
      return res.status(200).send(result[0])

    }
    const resultado = await connection.raw(`
         SELECT * FROM todolist;
    `)
    res.status(200).send(resultado[0])

  } catch (error) {
    res.status(errorCode)
  }
})
// ======================================================================



// ======================================================================
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app;
