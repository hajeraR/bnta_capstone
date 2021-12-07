CREATE TABLE descriptions (
id BIGSERIAL PRIMARY KEY,
zodiacSign TEXT,
zodiacIcon TEXT,
zodiacIconDark TEXT,
zodiacImage TEXT,
zodiacImageDark TEXT,
personality TEXT,
positiveMatch TEXT,
negativeMatch TEXT,
deathPredictions TEXT,
romance TEXT,
family TEXT,
money TEXT,
career TEXT
);

CREATE TABLE monthly_horrorscopes (
id BIGSERIAL PRIMARY KEY,
zodiacSign TEXT REFERENCES descriptions(zodiacSign),
months TEXT,
horrorScope TEXT
);

CREATE TABLE emails (
id BIGSERIAL PRIMARY KEY,
email TEXT,
zodiacSign TEXT
);