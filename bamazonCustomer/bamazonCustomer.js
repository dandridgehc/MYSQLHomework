//REQUIRE NODE PACKAGES
var mysql = require("mysql");
var inquirer = require("inquirer");
// require("console.table");

//var selection = process.argv[3]

//DATABASE CONNECTION & ERROR HANDLING
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  getData()
});



function getData(){
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
      });  
}





