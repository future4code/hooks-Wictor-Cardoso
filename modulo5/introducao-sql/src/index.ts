import express from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());
// ====================================================



// Postar novo usuário
app.post("/produtos", async (req, res) => {
  let errorCode = 400
  try {
    const { nome, preco, categoria } = req.body

    if (!nome || !preco || !categoria) {
      throw new Error("Passe o nome, preço e categoria do produto")
    }

    const novoProduto = {
      id: Number(Date.now()),
      nome,
      preco,
      categoria
    }

    await connection.raw(`
      INSERT INTO Produtos(id, nome, preco, categoria)
      VALUES(${novoProduto.id}, "${novoProduto.nome}", ${novoProduto.preco}, "${novoProduto.categoria}")
    `)

    res.status(200).send("Produto adicionado")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


// ====================================================
app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});