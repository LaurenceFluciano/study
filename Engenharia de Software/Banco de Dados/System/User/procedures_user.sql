
-- insert user method

CREATE OR REPLACE PROCEDURE insert_user
    (
        name IN VARCHAR(120),
        email IN VARCHAR(150),
        phone IN VARCHAR(15),
        INOUT id_out INT
    )
LANGUAGE plpgsql
AS $$
BEGIN

    INSERT INTO "user" (name, email, phone) VALUES (
        insert_user.name,
        insert_user.email,
        insert_user.phone
    )
    RETURNING id INTO id_out;


    RAISE NOTICE 'Usuário inserido com sucesso seu id é: %', id_out;
END;
$$;

DO $$
DECLARE
    new_id INT;
BEGIN
    CALL insert_user('John Doe', 'john@example.com', '123456789', new_id);
    RAISE NOTICE 'The returned ID is %', new_id;
END $$;


CREATE OR REPLACE PROCEDURE update_user
    (
        id INT,
    )
LANGUAGE plpgsql
AS $$
BEGIN

    SELECT EXISTS(SELECT 1 FROM "user" WHERE id = p_id) INTO v_existe;

    IF NOT v_existe THEN
        RAISE EXCEPTION 'Erro: O usuário % não existe no sistema.', p_id
            USING ERRCODE = 'NOT_FOUND';
    END IF;
    

    UPDATE "user" 
        SET (update_user.name, update_user.phone, update_user.email)
            WHERE id = update_user.id;

END;
$$;