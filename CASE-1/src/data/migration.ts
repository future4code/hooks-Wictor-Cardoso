import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {
    async run() {
        try{
            await this.up();
            console.log("MIGRATIONS UP");
        }catch ( error ) {
            console.log("MIGRATIONS DOWN", error.message || error.sqlMessage);
        } finally {
            await this.close();
            console.log("MIGRATIONS CLOSE");
        }
    }

    async up(){
        await BaseDatabase.connection.raw(`
        CREATE TABLE IF NOT EXISTS BANDAS (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            music_genre VARCHAR(255) NOT NULL,
            responsible VARCHAR(255) UNIQUE NOT NULL 
            );
        `);
    }
}