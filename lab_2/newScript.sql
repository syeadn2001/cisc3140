sqlite3 carContestLab.db << 'EOS'

.headers on
.mode csv

--Part 1
DROP TABLE IF EXISTS csvData;

CREATE TABLE csvData(
Timestamp DATETIME,
Email TEXT,
Name TEXT,
Year INT,
Make TEXT,
Model TEXT,
Car_ID INT,
Judge_ID TEXT,
Judge_Name TEXT,
Racer_Turbo INT,
Racer_Supercharged INT,
Racer_Performance INT,
Racer_Horsepower INT,
Car_Overall INT,
Engine_Modifications INT,
Engine_Performance INT,
Engine_Chrome INT,
Engine_Detailing INT,
Engine_Cleanliness INT,
Body_Frame_Undercarriage INT,
Body_Frame_Suspension INT,
Body_Frame_Chrome INT,
Body_Frame_Detailing INT,
Body_Frame_Cleanliness INT,
Mods_Paint INT,
Mods_Body INT,
Mods_Wrap INT,
Mods_Rims INT,
Mods_Interior INT,
Mods_Other INT,
Mods_ICE INT,
Mods_Aftermarket INT,
Mods_WIP INT,
Mods_Overall INT);

.import data_lab2/data.csv csvData

.mode column

DROP TABLE IF EXISTS Cars;

CREATE TABLE Cars(
Car_ID INT PRIMARY KEY,
Year INT,
Make TEXT,
Model TEXT,
Name TEXT,
Email TEXT);
INSERT INTO Cars (Car_ID, Year, Make, Model, Name, Email) SELECT Car_ID, Year, Make, Model, Name, Email FROM csvData;
DELETE FROM Cars WHERE rowid=1;

DROP TABLE IF EXISTS Judges;

CREATE TABLE Judges(
Timestamp DATETIME,
Judge_ID TEXT,
Judge_Name TEXT);
INSERT INTO Judges (Timestamp, Judge_ID, Judge_Name) SELECT Timestamp, Judge_ID, Judge_Name
FROM csvData;
DELETE FROM Judges WHERE rowid=1;

DROP TABLE IF EXISTS Car_Score;

CREATE TABLE Car_Score(
Car_ID INT PRIMARY KEY,
Racer_Turbo INT,
Racer_Supercharged INT,
Racer_Performance INT,
Racer_Horsepower INT,
Car_Overall INT,
Engine_Modifications INT,
Engine_Performance INT,
Engine_Chrome INT, 
Engine_Detailing INT,
Engine_Cleanliness INT,
Body_Frame_Undercarriage INT,
Body_Frame_Suspension INT,
Body_Frame_Chrome INT,
Body_Frame_Detailing INT,
Body_Frame_Cleanliness INT,
Mods_Paint INT,
Mods_Body INT,
Mods_Wrap INT,
Mods_Rims INT,
Mods_Interior INT,
Mods_Other INT,
Mods_ICE INT,
Mods_Aftermarket INT,
Mods_WIP INT,
Mods_Overall INT);
INSERT INTO Car_Score (Car_ID, Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower, Car_Overall, Engine_Modifications, Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness, Body_Frame_Undercarriage, Body_Frame_Suspension, Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness, Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP, Mods_Overall)
SELECT Car_ID, Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower, Car_Overall, Engine_Modifications, Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness, Body_Frame_Undercarriage, Body_Frame_Suspension, Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness, Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP, Mods_Overall 
FROM csvData;
DELETE FROM Car_Score WHERE rowid=1;


--Part 2

ALTER TABLE Car_Score ADD COLUMN Scores INT;
UPDATE Car_Score SET Scores = (Racer_Turbo + Racer_Supercharged + Racer_Performance + Racer_Horsepower + Car_Overall + Engine_Modifications + Engine_Performance + Engine_Chrome + Engine_Detailing + Engine_Cleanliness + Body_Frame_Undercarriage + Body_Frame_Suspension + Body_Frame_Chrome + Body_Frame_Detailing + Body_Frame_Cleanliness + Mods_Paint + Mods_Body + Mods_Wrap + Mods_Rims + Mods_Interior + Mods_Other + Mods_ICE + Mods_Aftermarket + Mods_WIP + Mods_Overall);


DROP TABLE IF EXISTS carRanks;
CREATE TABLE carRanks AS 
SELECT Cars.Car_ID, Cars.Year, Cars.Make, Cars.Model, Car_Score.Scores
FROM Cars
JOIN Car_Score ON Cars.Car_ID = Car_Score.Car_ID;
ALTER TABLE carRanks ADD COLUMN Rank INT;

DROP TABLE IF EXISTS orderedScores;
CREATE TABLE orderedScores AS 
SELECT * FROM carRanks ORDER BY Scores DESC;
UPDATE orderedScores
SET Rank = rowid;

.mode csv
.output extract1.csv
SELECT * FROM orderedScores;

.output
.mode column

--Part 2 of Question 2
.mode csv
.output extract2.csv

SELECT 
	* 
FROM (
	SELECT
		*,
		RANK () OVER ( 
			PARTITION BY Make
			ORDER BY Rank DESC
		) topThree 
	FROM
		orderedScores
) 
WHERE 
	topThree<=3;


.output
.mode column

--PART 3 
DROP TABLE IF EXISTS updateJudges;
CREATE TABLE updateJudges AS 
SELECT Judge_ID, Judge_Name, COUNT(*) AS carScored, MIN(Timestamp) AS START, MAX(Timestamp) AS END
FROM csvData GROUP BY Judge_ID;

DROP TABLE Judges;
ALTER TABLE updateJudges RENAME TO Judges;

.mode csv
.output updatedJudgesTable.csv

SELECT * FROM Judges;

.mode column
.output

EOS
