create procedure fetchSource
AS
    BEGIN
        SELECT * FROM sources
        FOR JSON AUTO ;
    end