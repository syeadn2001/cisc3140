var express = require("express")

//Creation of the express server in `app`
var app = express()

//fetching the database from database.js
var db = require("./database.js");

//Requiring this module so we can easily parse the user's
//request into a JSON request, breaking it down so we can 
//accomplish the C in CRUD.
var bodyParser = require("body-parser");
const res = require("express/lib/response");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Port for the server
var HTTP_PORT = 8000;

//Starting the server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

//Root endpoint (default/homepage)
app.get("/", (req, res) => {
    res.send(`<b>This is the root endpoint for Adnaan Syed's Lab 4`);
});



//Display the entire raw database
app.get("/api/all", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    var sqlScript = "select * from csvData"
    var params = []
    db.all(sqlScript, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            console.log("error on server side")
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

app.get("/api/cars", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    var sqlScript = "select * from Cars";
    var params = []
    db.all(sqlScript, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return
        }
        res.json({
            "Message": "Success",
            "data": rows
        })
    })
})
app.get("/api/owners", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    var sqlScript = "select * from Owners"
    var params = []
    db.all(sqlScript, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

//Display the raw scores of all cars
app.get("/api/scores", (req, res) => {
    var sqlScript = "select * from Car_Score"
    var params = []
    db.all(sqlScript, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

//Selecting a single recored based off their car id
app.get("/api/cars/:carid", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    var sqlScript = "select * from csvData where Car_ID = ?"
    var params = [req.params.carid]
    db.all(sqlScript, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

//selecting a single owner based off their car id
app.get("/api/owners/:carid", (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    var sql = "select * from Owners where Car_ID = ?"
    var params = [req.params.carid]
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

//Posting a new data record of cars through a URL respnse
app.post("/api/cars/", (req, res) => {
    var errors = []
    if (!req.body.Car_ID) {
        errors.push("No id specified");
        console.log("1");
    }
    if (!req.body.Year) {
        errors.push("No year specified");
        console.log("1");
    }
    if (!req.body.Make) {
        errors.push("No make specified");
        console.log("1");
    }
    if (!req.body.Model) {
        errors.push("No model specified");
        console.log("1");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    var carData = {
        Car_ID: req.body.Car_ID,
        Year: req.body.Year,
        Make: req.body.Make,
        Model: req.body.Model
    }
    console.log(carData)
    var sql = 'INSERT or REPLACE INTO Cars (Car_ID, Year, Make, Model) VALUES (?,?,?,?)'
    var params = [carData.Car_ID, carData.Year, carData.Make, carData.Model]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": carData,
            "id": this.lastID
        })
    });
});

app.post("/api/owners/", (req, res) => {
    var errors = []
    if (!req.body.Car_ID) {
        errors.push("No Car_Id specified");
    }
    if (!req.body.Name) {
        errors.push("No Name specified");
    }
    if (!req.body.Email) {
        errors.push("No email specified");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    var ownerData = {
        Car_ID: req.body.Car_ID,
        Name: req.body.Name,
        Email: req.body.Email
    }
    console.log(ownerData);
    var sql = 'INSERT or REPLACE INTO Owners (Car_ID, Name, Email) VALUES (?,?,?)'
    var params = [ownerData.Car_ID, ownerData.Name, ownerData.Email]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": ownerData,
            "id": this.lastID
        })
    });
})

// Update information on Cars using carid
app.patch("/api/cars/:carid", (req, res) => {
    var data = {
        carid: req.params.carid,
        Year: req.body.Year,
        Make: req.body.Make,
        Model: req.body.Model
    }

    var sql = `UPDATE Cars SET Year = COALESCE(?, Year), Make = COALESCE(?, Make), Model = COALESCE(?,Model) WHERE Car_ID = ?`;

    var params = [data.carid, data.Year, data.Make, data.Model];

    db.run(sql, params, function (err) {

        // error checking
        if (err) {
            return console.error(err.message);
        }

        //print message to console indicating how many changes occurred
        console.log(`Row(s) updated: ${this.changes}`);
    });

    console.log(data)
    console.log(this.changes)

    // successful execution
    res.json({
        message: "success",
        data: data,
        changes: this.changes
    });
})

app.patch("/api/owners/:carid", (req, res, next) => {

    // create data object
    var data = {
        name: req.body.name,
        email: req.body.email,
        carid: req.params.carid
    }

    // initialize the sql command and the parameter array
    // COALESCE allows the user to update some fields and leave others with their initial values
    var sql = `UPDATE Owners SET Name = COALESCE(?, Name), Email = COALESCE(?, Email) WHERE Car_ID = ?`;
    var params = [data.name, data.email, data.carid];

    db.run(sql, params, function (err) {

        // error checking
        if (err) {
            return console.error(err.message);
        }

        //print message to console indicating how many changes occurred
        console.log(`Row(s) updated: ${this.changes}`);
    });

    console.log(data)
    console.log(this.changes)
    // successful execution
    res.json({
        message: "success",
        data: data,
        changes: this.changes
    })
})

// Default response for any other request
app.get("*", (req, res) => {
    res.send("Do not have a response for the specified request")
});
