import app from "./app";
import {v4 as uuidv4, v4} from "uuid"
import connection from "./database/connection";
import { CadastroProduct, CadastroUser } from "./type";

app.post("/users", async (req, res)=>{
    let errorCode = 400
    try {
      const {name, email, password} = req.body
  
      if(!name || !email || !password) {
        throw new Error("É necessário ter nome, email e password")
      }
      
      const novoCadastro: CadastroUser = {
        id: uuidv4(),
        name,
        email,
        password
      }
      
      await connection.raw(`
      INSERT INTO labecommerce_users(id, name, email, password)
      VALUES("${novoCadastro.id}", "${novoCadastro.name}", "${novoCadastro.email}", "${novoCadastro.password}")
      `)
      
      res.status(200).send("Cadastro feito")
  
    } catch (error) {
    res.status(errorCode).send(error)      
    }
  })

app.get("/users", async (req, res)=>{
    let errorCode = 400
   try {
    const result = await connection.raw(`    
    SELECT * FROM labecommerce_users;
    `)

    res.status(200).send(result[0])
   } catch (error) {
    res.status(errorCode).send(error)
   } 
})

app.post("/products", async (req, res)=>{
    let errorCode = 400
    try {
      const {name, price, image_url} = req.body
  
      if(!name || !price || !image_url) {
        throw new Error("É necessário ter nome, preço e imagem")
      }
      
      const novoCadastro: CadastroProduct = {
        id: uuidv4(),
        name,
        price,
        image_url
      }
    
      await connection.raw(`
      INSERT INTO labecommerce_users(id, name, email, password)
      VALUES("${novoCadastro.id}", "${novoCadastro.name}", "${novoCadastro.email}", "${novoCadastro.password}")
      `)
      
      res.status(200).send("Cadastro feito")
  
    } catch (error) {
    res.status(errorCode).send(error)      
    }
  })

  app.get("/products", async (req, res)=>{
    let errorCode = 400
   try {
    const result = await connection.raw(`    
    SELECT * FROM labecommerce_users;
    `)

    res.status(200).send(result[0])
   } catch (error) {
    res.status(errorCode).send(error)
   } 
})