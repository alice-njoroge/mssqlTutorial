create table [dbo].[sources](
    id int NOT NULL PRIMARY KEY IDENTITY (1, 1),
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME NULL,
    updateAt DATETIME NULL,
    deletedAt DATETIME NULL
);