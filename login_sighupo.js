

const mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Savita@123",
  database:"login_singup"

});
con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE login_singup", function (err, result) {
          if (err){;
          console.log(" notDatabase created");
          }else{
              console.log("database creted")
          }
        }); new_login_singup
      });
    


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE new_login_singup (id INT AUTO_INCREMENT PRIMARY KEY ,username VARCHAR(255),password VARCHAR(255),email VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err){
        console.log(" not Table created");
        }
        else{
            console.log("table created")
        }
      });
    })



const readline=require("readline-sync");
var user=readline.question("DO YOU WANT TO LOGIN OR SIGN UP:")
   if(user=="signin"){
        username=readline.question("ENTER THE USER NAME:")
        password=readline.question("ENTER THE PASSWORD:")
        email=readline.question("ENTER THE EMAIL")
        passd=(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    


        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO new_login_singup (username,Password,Email) VALUES ?";
            var values = [
            [username,password,email]
        ]

con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});


}
else {
  if(user=="login"){
    var username2 = readline.question("ENTER YOUR USER NAME:")
    var password2= readline.question("ENTER YOUR PASSWORD")
}
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM  new_login_singup", function (err, result, fields) {
      if (err) {
      console.log(err)
      }else{
        console.log(result)
      }
      var found=result.find(function(user){
        if(user.username==username2 && user.password==password2){
          return user
        }
      })
      if (found){
        console.log("login successfully")
      }
      else{
        console.log("user not found ")
      }
    });
  });
  
}






