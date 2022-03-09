# LAB 2


## Description
The task given to us was to create a data analysis work stream for the given CSV file, yet in this project we are using SQL through the SQLite technology. The tasks are :

1. Cars table with primary key Car_ID and contains car information such as Year, Make, Model as well as owner information
o Judges table that contains Judge_ID, Judge Name
o Car_Score table that contains the scores for each car with Car_ID as the primary key

2 Write a single SQLite3 query that shows the results for all cars (that query the correct tables).Export the results a file named extract1.csv.
o Write an SQLite3 query that shows for each Car Make grouping: a list of the top 3 cars of that Make. 

3. Update the Judges table with the following information. 
o Counts the number of cars each judge has judged for the day
o A field that shows the ‘start’ or the first timestamp of judging for the day
o A field that shows the ‘end’ or the final timestamp of judging for the day



## How this repo works

### Data
- I imported the data as a submodule into my project repository. The link I received it from was: https://gist.github.com/katychuang/d66a59b6db4e59c16efd4c42ad411f8e/5e68894febe276fd763dcc8e28fa6ad2657f7d7f
- This dataset consists of a series of records, each record being a specific car. The features of each instance give attributes of the car, its owner, its condition, etc. 

### How this program works

1. **newScript.sql** => This sequel files contains all the SQL commands needed for the data analysis workflow, from separating the CSV files into separate tables to the various metrics I computed. 

2.  **Logs**  => These are recorded terminal sessions illustrating the coding process in developing this workflow

3. **carContestLab.db** => This is the database I created which contains the computed tables I transformed into CSV files. This database is explained within the data_dictionary.md file. 

4. **CSV files** => These are the outputs of my program, illustrating the analyses I produced through coding.


## How to Run

**Dependencies: SQLite 3.30 or higher is required for this project**

1. Clone the repo into your local system. 
2.  Run  `make lab2`  in the root directory (in the  `cisc3140`  folder)
