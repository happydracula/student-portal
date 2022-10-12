const express = require("express");
const port = 3000;
const user = "user";
const pass = "welcome";
const app = express();
// const mysql = require("mysql");
// const con = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   database: "studentDB",
//   user: "root",
//   password: "password",
// });
// con.connect(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connection passed");
//   }
// });
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
  //   con.query("select * from student", (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(rows);
  //     }
  //   });
});
app.use(express.urlencoded());
app.post("/", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
  if (username == user && password == pass) {
    res.sendFile(__dirname + "/student.html");
  }
});
app.listen(port, () => {
  console.log("Running at port:", port);
});
