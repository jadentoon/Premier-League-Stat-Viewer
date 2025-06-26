DROP SCHEMA IF EXISTS premier_league_players CASCADE;

SET search_path TO premier_league_players;

CREATE SCHEMA premier_league_players;
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
progressive_passes_rec REAL NOT NULL,
goals_per_90 REAL NOT NULL,
assists_per_90 REAL NOT NULL,
g_a_per_90 REAL NOT NULL,
non_penalty_goals_per_90 REAL NOT NULL,
g_a_per_90_non_pen REAL NOT NULL,
expected_goals_per_90 REAL NOT NULL,
expected_assisted_goals_per_90 REAL NOT NULL,
xg_xag_per_90 REAL NOT NULL,
npg_expected_goals_per_90 REAL NOT NULL,
npxg_xag_per_90 REAL NOT NULL
);

SET client_encoding TO 'UTF8';
\COPY players FROM 'players.csv' DELIMITER ',' CSV HEADER;