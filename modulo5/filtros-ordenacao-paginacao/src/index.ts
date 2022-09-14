import { app } from "./app";
import { getAllName } from "./endpoints/getAllRecipes";
import { getAllTipes } from "./endpoints/getAllTipe";

app.get("/usersname", getAllName);
app.get("/userstipe", getAllTipes);
