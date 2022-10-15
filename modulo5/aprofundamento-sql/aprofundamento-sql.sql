USE `hooks-4313684-wictor-cardoso`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Aprofundamento_Sql (
id VARCHAR(22) PRIMARY KEY,
name VARCHAR(38) UNIQUE NOT NULL,
title VARCHAR(40) NOT NULL,
date DATE NOT NULL
);

INSERT INTO Aprofundamento_Sql(id,name,title,date)
VALUES("001","LabeSky","LSy","2023/10/05"),
	  ("002","Labefy","LFy","2024/01/06"),
	  ("003","AstroZoom","AZm","2022/12/20");

ALTER TABLE Aprofundamento_Sql DROP COLUMN title;

DESCRIBE Aprofundamento_Sql;

ALTER TABLE Aprofundamento_Sql CHANGE date dueDate VARCHAR(20) NOT NULL;

ALTER TABLE Funcionarios_List MODIFY email VARCHAR(40) NOT NULL UNIQUE;

DESCRIBE Funcionarios_List; 

ALTER TABLE Aprofundamento_Sql ADD description VARCHAR(255) NOT NULL;

UPDATE Aprofundamento_Sql SET description = "Projeto de sistema em nuvem da Labenu." WHERE id = "001";

UPDATE Aprofundamento_Sql SET description = "Projeto de sistema de gerenciamento de músicas da Labenu." WHERE id = "002";

UPDATE Aprofundamento_Sql SET description = "Projeto de rede de comunicação da Labenu." WHERE id = "003";  

SELECT * FROM Aprofundamento_Sql ORDER BY dueDate ASC;  -- DESC
   
SELECT name,duedate FROM Aprofundamento_Sql ORDER BY dueDate ASC LIMIT 2;