'use strict';

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(express.static(__dirname + '/image/'));

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "db",
    user: "mysql",
    password: "19031973Mother",
    database: "comm"
});

app.set("view engine", "hbs");
app.get("/", function (req, res) {
    pool.query("SELECT * FROM userscomm", function (err, data) {
        if (err) return console.log(err);
        res.render("HTMLPage1.hbs", {
            users: data
        });
    });
});

app.post("/", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    let data = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const name = req.body.name;
    const comment = req.body.comment;
    pool.query("INSERT INTO userscomm (data, name, comment) VALUES (?, ?, ?)", [data, name, comment], function (err, data) {
        if (err) return console.log(err);
        res.redirect("/");
    });
});

app.listen(3000, function () {
    console.log("Server waiting connection...");
});