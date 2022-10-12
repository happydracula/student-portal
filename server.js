const express = require("express");
const port = 3000;
const user = "user";
const pass = "welcome";
const app = express();
const mysql = require("mysql");
const ejs = require("ejs");
app.set("view engine", "ejs");
const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "studentDB",
  user: "root",
  password: "password",
});
con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection passed");
  }
});
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
app.get("/student", (req, res) => {
  res.sendFile(__dirname + "/student.html");
});
app.use(express.urlencoded());
app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  if (username == user && password == pass) {
    res.sendFile(__dirname + "/student.html");
  }
});
app.post("/student", (req, res) => {
  entries = {
    id: req.body.id,
    name: req.body.name,
    performance: req.body.performance,
    attendance: req.body.attendance,
  };

  var query = "insert into student values ?";
  var values = [
    [entries.id, entries.name, entries.performance, entries.attendance],
  ];
  con.query(query, [values], (err, res) => {
    if (err) {
      console.log(err);
    }
  });
  var allEntries;

  con.query("select * from student", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      allEntries = JSON.parse(JSON.stringify(rows));
      allEntries.forEach((element) => {
        console.log("test");
      });
      console.log("type:" + typeof allEntries);
      res.render("table", { allEntries: allEntries });
    }
  });
});
app.listen(port, () => {
  console.log("Running at port:", port);
});
