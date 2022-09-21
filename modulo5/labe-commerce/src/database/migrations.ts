import connection from "./connection";

const criarTabelaProdutos = async () => {
  try {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_users(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL);

        CREATE TABLE IF NOT EXISTS labecommerce_products(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL, 
        price DECIMAL(8,2) NOT NULL,
        image_url VARCHAR(255) NOT NULL);
        
        CREATE TABLE IF NOT EXISTS labecommerce_purchases(
        id VARCHAR(255) PRIMARY KEY, 
        user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
        produtct_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (produtct_id) REFERENCES labecommerce_products(id),
        quantity INT NOT NULL,
        total_price DECIMAL(8,2) NOT NULL);
        `);

    console.log("TABELAS CRIADAS");
  } catch (error: any) {
    console.log("MEU DEUS ALGO DEU ERRADO");
    console.log(error.sqlMessage);
  }
};

// async function popularTabelaProdutos() {
//   try {
//     await connection.raw(`
//             INSERT INTO labecommerce_users (id, name, password)
//             VALUES ();  
            
//             INSERT INTO labecommerce_users (id, name, price, image_url)
//             VALUES (); 

//             INSERT INTO labecommerce_users (id, user_id, produtct_id, quantity, total_price)
//             VALUES (); 
//         `);

//     console.log("");
//   } catch (error: any) {
//     console.log("");
//     console.log(error.sqlMessage);
//   }
// }

criarTabelaProdutos()
//   .then(() => popularTabelaProdutos())
  .finally(() => process.exit());
