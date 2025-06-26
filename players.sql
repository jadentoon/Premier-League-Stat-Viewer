--WARNING - This will drop the Schema - Check before Running.
DROP SCHEMA IF EXISTS premier_league_players CASCADE;
CREATE SCHEMA premier_league_players;

--Sets the search path to the schema just created so the table will be created inside that schema.
SET search_path TO premier_league_players;

--Creates the table.
CREATE TABLE players (
id SERIAL PRIMARY KEY,
player TEXT NOT NULL,
nation CHAR(3),
pos TEXT NOT NULL,
squad TEXT NOT NULL,
age INT,
born INT,
matches_played INT NOT NULL,
starts INT NOT NULL,
min INT NOT NULL,
nineties_played REAL NOT NULL,
goals INT NOT NULL,
assists INT NOT NULL,
goals_and_assists INT NOT NULL,
non_penalty_goals INT NOT NULL,
penalty_goals INT NOT NULL,
penalty_kicks_attempted INT NOT NULL,
yellow_cards INT NOT NULL,
red_cards INT NOT NULL,
expected_goals REAL NOT NULL,
non_penalty_xg REAL NOT NULL,
assisted_xg REAL NOT NULL,
npxg_xag REAL NOT NULL,
progressive_carries REAL NOT NULL,
progressive_passes REAL NOT NULL,
progressive_passes_rec REAL NOT NULL
);

--Sets encoding to UTF8 so all characters within the players.csv file can be read properly without
--giving an error, for example the 'Á' in Edson Álvarez
SET client_encoding TO 'UTF8';

--Copys the players from the csv into the table.
\COPY players FROM 'players.csv' DELIMITER ',' CSV HEADER;