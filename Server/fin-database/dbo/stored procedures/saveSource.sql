create procedure saveSource (@name AS VARCHAR)
AS
BEGIN
insert into [dbo].[sources]
    (name, createdAt, updateAt, deletedAt)
    values (@name, GETDATE(), null, null)
END
