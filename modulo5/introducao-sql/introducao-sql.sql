USE `hooks-4313684-wictor-cardoso`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Funcionarios_List (
id INT NOT NULL,
name varchar(38),
email varchar(100) NOT NULL UNIQUE,
primary key (id)
);

INSERT INTO Funcionarios_List (id,name,email)
VALUES ("001" , "Luana", "lua@lbn.com"),
	   ("002" , "Vinicius", "vini@lbn.com"),
       ("003" , "Laura", "lau@lbn.com");
       
SELECT * FROM Funcionarios_List;

SELECT id AS "identifier", name FROM Funcionarios_List;

SELECT * FROM Funcionarios_List WHERE id = "001";

SELECT * FROM Funcionarios_List WHERE name LIKE "%a%";

SELECT * FROM Funcionarios_List WHERE name NOT LIKE "%r%" AND email LIKE "%u%";

INSERT INTO Funcionarios_List (id,name,email)
VALUES ("004" , "Yuzo", "yuzo@lbn.com");

DELETE FROM Funcionarios_List
WHERE id = "004";