import express from "express";
import cors from "cors";
import { users } from "./data";
import { posts } from "./posts";
import { AddressInfo } from "net";
import { type } from "os";
import { CompletionInfoFlags } from "typescript";

const app = express();

app.use(express.json());

// Exercício 1
// app.get("/", (req, res) => {
//     res.send("Hello from Express")
// })

// Exercício 2
type Person = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};

// Exercício 3
const arrayPersons: Person[] = [
  {
    id: 342342243,
    name: "Wictor",
    phone: 3.333 - 3355,
    email: "email@gmail.com",
    website: "web.site.com",
  },
  {
    id: 234345234,
    name: "Joao",
    phone: 3.333 - 3355,
    email: "email@gmail.com",
    website: "web.site.com",
  },
  {
    id: 6345635657,
    name: "Guilherme",
    phone: 3.333 - 3355,
    email: "email@gmail.com",
    website: "web.site.com",
  },
  {
    id: 453457657,
    name: "Amanda",
    phone: 3.333 - 3355,
    email: "email@gmail.com",
    website: "web.site.com",
  },
  {
    id: 980896786,
    name: "Maria",
    phone: 3.333 - 3355,
    email: "email@gmail.com",
    website: "web.site.com",
  },
];

// Exercício 4
// Possibilidade 1
// app.get('/users', (req, res) => {
//     const valor = req.body.valor
//     if (valor === "senhabody") {
//       res.send({arrayPersons})
//     } else {
//       res.send('O valor não é válido.')
//     }
//     res.send(req.query)
//   })

// Possibilidade 2
// app.get("/users", (req, res) => {
//     const array = arrayPersons.map((obj)=>{
//         return obj
//     })
//     res.send(array)
// })

// Exercício 5
type Post = {
  id: any;
  title: string;
  body: string;
  userId: number;
};

// Exercício 6
const arrayPost: Post[] = [
  {
    id: 100,
    title: "titleone",
    body: "aliquam pariatur suscipit fugiat eos sunt\noptio voluptatem eveniet rerum dignissimos\nquia aut beatae\nmodi consequatur qui rerum sint veritatis deserunt est",
    userId: 234345234,
  },
  {
    id: 132,
    title: "titleone",
    body: "aliquam pariatur suscipit fugiat eos sunt\noptio voluptatem eveniet rerum dignissimos\nquia aut beatae\nmodi consequatur qui rerum sint veritatis deserunt est",
    userId: 6345635657,
  },
  {
    id: 134,
    title: "titleone",
    body: "aliquam pariatur suscipit fugiat eos sunt\noptio voluptatem eveniet rerum dignissimos\nquia aut beatae\nmodi consequatur qui rerum sint veritatis deserunt est",
    userId: 342342243,
  },
];

//Exercício 7
app.get("/users/post", (req, res) => {
  const array = arrayPost.map((obj) => {
    return obj;
  });
  res.send(array);
}); // Separados os dois arrays, não precisa um mexer no outro, apenas ter algo em comum para comparar, a visibilidade de quem fez ou não, e informações de usuário ficam totalmente separados dos posts, a depender da organização necessária, poderiam ser juntos ou separados.

//Exercício 8
// app.get("/users/post/:userId", (req, res) => {
//   const array = arrayPost.map((obj) => {
//     if (obj.id === arrayPersons[0].id) {
//       return {
//         ...arrayPost,
//         arrayPost: [],
//       };
//     }
//   });
//   res.send(array);
// });

// A opção acima foi como eu estava fazendo sozinho, agora a de baixo foi com ajuda dos colegas.

app.get("/users/post/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const postsWithId = arrayPost.filter((obj) => {
    if (obj.userId === userId) {
      return obj;
    }else{"Params errado, os id não existe."}
  });
  res.send(postsWithId)
});

// ====================================================================
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
