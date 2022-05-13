# Lab 4

Backend API for car data.

## Description

This project is a backend API built using a combination of SQL and JavaScript that enables users to view, add to, and update data stored in a database of cars.

## Dependencies

-   SQLite3
-   NodeJS
-   Express

##  Contents

-   **create_database.sql**: SQLite script that creates the required database with the specified tables.
    
-   **database.js:** JavaScript code that connects to the SQLite3 database that is created in  **create_database.sql** and exports the database from the module.
    
-   **server.js**: JavaScript code that creates routes to GET data from the database, POST data to the database, and PATCH data already in the database. 

- **documentation**: Documentation on the API

## Getting Started

Implement these lines of code from the root of this repo (**should be in the lab_4 directory** ) to connect to the backend.

``make``

```
npm install
npm run start
```