# LAB 1


## Description
The task given to us was to create a data analysis work stream for the given CSV file. Specifically, we were supposed to :

- Across all cars, compute the total for each row and add as a new column. 
- Present the list in descending order using the total column, and add a new ranking column.
-  For each car_make grouping, list the top 3 cars (based off their total points)


## How this repo works

### Data
- I imported the data as a submodule into my project repository. The link I received it from was: https://gist.github.com/katychuang/d66a59b6db4e59c16efd4c42ad411f8e/7cb9b51b76a442a7ffd6a9d4d27ffcb9c9bcf776
- This dataset consists of a series of records, each record being a specific car. The features of each instance give attributes of the car, its owner, its condition, etc. 

### How this program works

#### Part 1
1. **newPoints.awk** = This `awk` script initially reads the `data.csv`file and accumulates the all the points of each record, and creates a new file (`unsorted.txt` ) with a new column *"Points"* that represent that sum.
2.  The **make file** then sorts the `unsorted.txt` by the new *Points* column in descending order and this sorted data is stored in `sorted.txt`.
3. The **newRank.awk** script then adds a sequential ranking based off these points, with the highest points being given the first rank and so on. This completes the first part of the Lab, and this completed analysis is stored in `part1.txt`

#### Part 2
1. The **topThree.awk** analyzes the completed `part1.txt` data and creates several output files, each file being a different brand of the car (each unique attribute in the *car make* is recorded in a separate output file). Essentially, the dataset is divided into output files based on the brand of the car. All these output files are placed in the **cars** directory. 
2. The **make file**  finally completes this part by applying the same short `awk` script to each new file in the **cars** directory, which prints the first 3 records of each file into a new text file, `part2.txt` . The first 3 records of each file would be the specific models of the car that have the highest points.

## How to Run

There are no dependencies required for this project. To run this Lab:

1. Clone the repo into your local system. 
2. Run this code 
> `$ git submodule update --init --recursive`
- When you clone the repo, the submodule fails to clone. An extra command is necessary to bring the submodule to your computer.
4. Traverse into the  `lab1` directory (make sure that your base be this directory)
5. Run  `make` 


