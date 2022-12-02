import { Migrations } from "./migration";

new Migrations().run()
.then(()=>console.log("Migrations executed sucessfuly"))
.catch(error => console.log(error));