// import express from "express";
// import cors from "cors";
// import connection from "./database/connection";

// const app = express();

// app.use(express.json());
// app.use(cors());
// //=================================================================

// // Pegar todos os elementos da tabela
// app.get("/users", async (req, res) => {
//   let errorCode = 400
//   try {
//     const busca = req.query.busca

//     if (!busca) {
//       const resultado = await connection.raw(`
//         SELECT * FROM Users
       
//       `);

//       res.status(200).send(resultado[0])
//     }

//     const resultado2 = await connection.raw(`
//       SELECT * FROM Users;
//     `)

//     res.status(200).send(resultado2[0])
//   } catch (error) {
//     res.status(errorCode).send(error.message)
//   }
// })
// //=================================================================

// // Postar novo usuário
// app.post("/users", async (req, res) => {
//   let errorCode = 400
//   try {
//     const { id, nome, email } = req.body

//     if (!id || !nome || !email) {
//       throw new Error("Passe o nome e o email.")
//     }

//     const novoUser = {
//       id: Number(Date.now()),
//       nome,
//       email
//     }

//     await connection.raw(`
//       INSERT INTO Users(id, nome, email)
//       VALUES(${novoUser.id}, "${novoUser.id}", ${novoUser.nome}, "${novoUser.email}")
//     `)

//     res.status(200).send("User cadastrado")

//   } catch (error) {
//     res.status(errorCode).send(error.message)
//   }
// })
// //=================================================================

// // Mudar usuário
// app.put("/users/:id", async (req, res) => {
//   let errorCode = 400
//   try {
//     const id = Number(req.params.id)
//     const email = Number(req.body.email)

//     const vary = await connection.raw(`
//       SELECT * FROM Users
//       WHERE id = ${id};
//     `)

//     if (vary[0].length === 0) {
//       throw new Error("Produto não encontrado")
//     }

//     if (!email) {
//       throw new Error("É necessário passar um email")
//     }

//     await connection.raw(`
//     UPDATE Users
//     SET email = ${email}
//     WHERE id = ${id};
//   `)

//     res.status(200).send("Email alterado")
//   } catch (error) {
//     res.status(errorCode).send(error.message)
//   }

// })
// //=================================================================

// // Deletar user
// app.delete("/users/:id", async (req, res) => {
//   let errorCode = 400
//   try {
//     const id = Number(req.params.id)

//     const vary = await connection.raw(`
//       SELECT * FROM Users
//       WHERE id = ${id};
//     `)

//     if (vary[0].length === 0) {
//       throw new Error("User não encontrado")
//     }

//     await connection.raw(`
//       DELETE FROM Users
//       WHERE id = ${id};
//     `)

//     res.status(200).send("User deletado")
//   } catch (error) {
//     res.status(errorCode).send(error.message)
//   }
// })
// //=================================================================

// //=================================================================
// app.listen(process.env.PORT || 3003, () => {
//   console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
// });