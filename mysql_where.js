
 



//  var mysql = require('mysql');

//  var con = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "Savita@123",
//    database: "myname"
//  });
 
//  con.connect(function(err) {
//    if (err) throw err;
//    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//      if (err) throw err;
//      console.log(result);
//    });
//  });


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Savita@123",
  database: "myname"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});






