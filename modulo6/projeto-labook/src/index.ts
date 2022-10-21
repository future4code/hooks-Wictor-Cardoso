/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { v4 } from "uuid";
import Knex from "knex";

/**************************** CONFIG ******************************/

dotenv.config();

export const connection: Knex = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3306,
    multipleStatements: true,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

/**************************** TYPES ******************************/

type authenticationData = {
  id: string;
};

type user = {
  id: string;
  name: string;
  email: string;
  password: string;
};

enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

type post = {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt: Date;
  authorId: string;
};

/**************************** SERVICES ******************************/

const generateId = (): string => v4();

/**************************** ENDPOINTS ******************************/

// Cadastro
app.post("/users/signup", async (req: Request, res: Response) => {
  try {
    let message = "Success!";
    const { name, email, password }: user = req.body;

    if (!name || !email || !password) {
      res.statusCode = 406;
      message = '"name", "email" and "password" must be provided';
      throw new Error(message);
    }

    const id: string = generateId();

    await connection("labook_users").insert({
      id,
      name,
      email,
      password,
    });

    res.status(201).send({ message });
  } catch (error: any) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;
    res.send({ message });
  }
});

// Buscar todos cadastrados
app.get("/users/list", async (req: Request, res: Response) => {
  try {
    let message = "Success!";

    const queryResult: any = await connection("labook_users").select("*");

    if (!queryResult) {
      res.statusCode = 404;
      message = "No users found";
      throw new Error(message);
    }

    res.status(200).send({ message, queryResult});
  } catch (error: any) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;
    res.send({ message });
  }
});

// Criar post
app.post("/posts/create", async (req: Request, res: Response) => {
  try {
    let message = "Success!";

    const { photo, description, type, authorId }:post = req.body;
   
    const postId: string = generateId();

    await connection("labook_posts").insert({
      id: postId,
      photo,
      description,
      type,
      author_id: authorId,
   });

   res.status(201).send({ message });
} catch (error: any) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;
    res.send({ message });
   }
});

// Buscar todos os post
app.get("/posts", async (req: Request, res: Response) => {
  try {
    let message = "Success!";

    const queryResult: any = await connection("labook_posts").select("*");

    if (!queryResult[0]) {
      res.statusCode = 404;
      message = "Post not found";
      throw new Error(message);
    }

    res.status(200).send({ message, queryResult });
  } catch (error: any) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;
    res.send({ message });
  }
});

// Buscar post por id
app.get("/posts/:id", async (req: Request, res: Response) => {
  try {
    let message = "Success!";

    const { id } = req.params;

    const queryResult: any = await connection("labook_posts")
      .select("*")
      .where({ id });

    if (!queryResult[0]) {
      res.statusCode = 404;
      message = "Post not found";
      throw new Error(message);
    }

    res.status(200).send({ message, queryResult });
  } catch (error: any) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;
    res.send({ message });
  }
});


// Fazer amizade

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
