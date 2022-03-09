# Data Dictionary

### csvData 
 - This main table was simply the information from the data.csv submodule transferred into the database.

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
CREATE TABLE Cars(
Car_ID INT PRIMARY KEY,
Year INT,
Make TEXT,
Model TEXT,
Name TEXT,
Email TEXT);
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
Mods_Overall INT, Scores INT

### Car_Score
 - This table stored all features that would be factored into a Car's total grade, and also includes the Car's total points. 

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
Mods_Overall INT, Scores INT

### Cars
 - contains simple details about the car and the owner's information

Car_ID INT PRIMARY KEY,
Year INT,
Make TEXT,
Model TEXT,
Name TEXT,
Email TEXT

### Judges
 - contains information about the judges of the contest, and after update contains statistics such as their duration of judging and the total amount of cars they evaluated. 

Judge_ID TEXT,
Judge_Name TEXT,
carScored,
START,
"END"


### carRanks
 - Contain a semi-fleshed out version of the cars and their respective scores and ranks. Just not ordered. 

Car_ID INT,
Year INT,
Make TEXT,
Model TEXT,
Scores INT

### orderedScores
 - Contain a fully-fleshed out version of the cars and their respective scores and ranks. 

Car_ID INT,
Year INT,
Make TEXT,
Model TEXT,
Scores INT,
Rank INT
