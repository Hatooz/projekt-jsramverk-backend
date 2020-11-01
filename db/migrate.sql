DROP TABLE IF EXISTS info;
DROP TABLE IF EXISTS texts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS userinfo;

CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    assets INTEGER DEFAULT 100,
    chaos INTEGER DEFAULT 0,
    exalts INTEGER DEFAULT 0,
    UNIQUE(email)
);


CREATE TABLE IF NOT EXISTS info (
    aboutme TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS texts (
    kmom INTEGER NOT NULL,
    redovisning TEXT NOT NULL
);

-- CREATE TABLE IF NOT EXISTS userinfo (
--     name VARCHAR(60),
--     assets INTEGER DEFAULT 100,
--     chaos INTEGER DEFAULT 0,
--     exalts INTEGER DEFAULT 0
-- );


INSERT INTO info (aboutme)
VALUES ("Lite info om mig. Jag är student här på BTH webbprogrammering och har börjat mitt andra år nu på distans. Denna kursen ser väldigt spännande ut med begrepp som devOps och websockets. Dessa har man hört om men aldrig förstått innebörden av så jag ser fram emot att lära mig om dessa bland allt annat.");
