import express from "express";
import cors from "cors";
import connection from "../database/connection";

const app = express();

app.use(express.json());
app.use(cors());

// Pegar todos os elementos da tabela
app.get("/users", async (req, res) => {
    let errorCode = 400
    try {
      const busca = req.query.busca
  
      if (busca) {
        const resultado = await connection.raw(`
          SELECT * FROM Users
          WHERE nome = "${busca}";
        `)
  
        res.status(200).send(resultado[0])
      }
  
      const resultado = await connection.raw(`
        SELECT * FROM Users;
      `)
  
      res.status(200).send(resultado[0])
    } catch (error) {
      res.status(errorCode).send(error.message)
    }
  })