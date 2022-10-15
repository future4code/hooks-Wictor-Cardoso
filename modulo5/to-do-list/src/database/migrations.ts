import connection from "./connection";

const criarUsers = async () => {
    try {
        await connection.raw(`
            CREATE TABLE todolist (
                id BIGINT PRIMARY KEY,
                name VARCHAR(30) NOT NULL,
                nickname VARCHAR(30) NOT NULL,
                email VARCHAR(100) NOT NULL
            );
        `)

        console.log("")
    } catch (error:any) {
        console.log("")
        console.log(error.sqlMessage)
    }
}

// async function popularTabelaProdutos() {
//     try {
//         await connection.raw(`
//             INSERT INTO todo ()
//             VALUES 
           
//         `)
        
//         console.log("")
//     } catch (error:any) {
//         console.log("")
//         console.log(error.sqlMessage)
//     }
// }

criarUsers()
// .then(() => popularTabelaProdutos())
.finally(() => process.exit())