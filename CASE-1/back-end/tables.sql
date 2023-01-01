CREATE TABLE IF NOT EXISTS TABLE_PIZZA(
    name VARCHAR(255) PRIMARY KEY,
    price DECIMAL(8, 2) NOT NULL,
    ingredients VARCHAR(255) NOT NULL
    );

CREATE IF NOT EXISTS TABLE_ORDER(
    id VARCHAR(255) PRIMARY KEY,
    order_id VARCHAR(255) NOT NULL UNIQUE,
    order_item_id VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    FOREIGN KEY (order_item_id) REFERENCES TABLE_ORDER_ITEM (order),
    FOREIGN KEY (date) REFERENCES TABLE_ORDER_ITEM (created_at)
);

CREATE TABLE IF NOT EXISTS TABLE_ORDER_ITEM(
    id VARCHAR(255) PRIMARY KEY,
    pizza VARCHAR(255) NOT NULL,
    quantity NUMBER NOT NULL,
    order VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (pizza) REFERENCES TABLE_PIZZA (name), 
    );

DROP TABLE TABLE_PIZZA, TABLE_ORDER, TABLE_ORDER_ITEM();

SELECT * FROM TABLE_PIZZA, TABLE_ORDER, TABLE_ORDER_ITEM();

-- TABELA_PIZZA:
--  Name: varchar(255) ( vc pode usar o nome como ID ou criar outra coluna, sua escolha
-- ) 
-- Price: FLOAT ou INT
-- ingredients: varchar(255) 

-- TABELA_ORDER - relação 1 para muitos,
-- 1 ordem pode ter muitos itens 
-- ORDER_ID: varchar(255) - identifica a ordem 
-- ORDER_ITEM_ID: varchar(255) - vincula ao ORDEM ITEM TABELA_ORDER_ITEM ID: varchar(255) 
-- PIZZA: varchar(255) - ref nome ou id da pizza 
-- QUANTITY: number
