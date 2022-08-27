import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as uuid} from "uuid"
import { arrayPessoas, typePessoas, typeExtrato } from "./data";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

// endpoint pega as informações
app.get("/test", (req, res) => {
  res.send("tudo ok!");
});


app.post("/users", (req, res) => {
   const newArrayPessoas = {   
    name : req.body.name,
    cpf :req.body.cpf,
    dataNascimento : req.body.dataNascimento,
    saldo:0,
    valor:'',
    data: Date.now().toString(),
    extrato:[{      
        data: Date.now().toString(),
        valor: 0,
        descricao: ""      
    }]
  }
  arrayPessoas.push(newArrayPessoas);
  res.send(arrayPessoas)
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
