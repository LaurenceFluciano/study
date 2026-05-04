CREATE TABLE user (
    id INT SERIAL,
    name VARCHAR(120),
    email VARCHAR(150),
    phone VARCHAR(15),

    CONSTRAINT pk_user PRIMARY KEY (id)
);

ALTER TABLE user
    ADD CONSTRAINT valid_phone
        CHECK (phone ~* '^\d{7,15}$');
        
ALTER TABLE email
    ADD CONSTRAINT not_empty_email
        CHECK (email IS NOT NULL AND email <> '');

ALTER TABLE name
    ADD CONSTRAINT not_empty_name
        CHECK (email IS NOT NULL AND email <> '');