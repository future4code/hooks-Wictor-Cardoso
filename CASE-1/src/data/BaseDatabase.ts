import knex from "knex";
import dotenv from "dotenv";
dotenv.config()
export class BaseDatabase {

    protected static connection = knex({
        client: "mysql",
        connection: {
            port: 3306,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME
        },
    });

    protected async close(): Promise<void>{
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy()
        }
    }
}