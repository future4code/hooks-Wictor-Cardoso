// import { BaseDatabase } from "./BaseDatabase";

// export class Migrations extends BaseDatabase {
//     async run() {
//         try{
//             await this.up();
//             console.log("MIGRATIONS UP");
//         }catch ( error ) {
//             console.log("MIGRATIONS DOWN", error.message || error.sqlMessage);
//         } finally {
//             await this.close();
//             console.log("MIGRATIONS CLOSE");
//         }
//     }

//     async up(){
//         await BaseDatabase.connection.raw(`
//         CREATE TABLE IF NOT EXISTS TABLE_PIZZA(
//             id VARCHAR(255),
//             Name: varchar(255),
//             Price: FLOAT,
//             ingredients: varchar(255) 
//             );
            
//             CREATE IF NOT EXISTS TABLE_ORDER(
//             order_id: VARCHAR(255),
//             order_item_id: VARCHAR(255),
//             );
            
//             CREATE TABLE IF NOT EXISTS TABLE_ORDER_ITEM(
//             id: VARCHAR(255), 
//             pizza: VARCHAR(255),
//             quantity: NUMBER
//             );
//         `);
//     }
// }

