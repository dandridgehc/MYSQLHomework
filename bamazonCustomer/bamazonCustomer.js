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
        //console.log(res);
        productList(res)
        connection.end();
        
      });  
}

function productList(array) {
  for(i=0;i<array.length;i++){
    //console.log(array[i])
    console.log("ID:", array[i].item_id)
    console.log("Product:", array[i].product_name)
    console.log("Price:", array[i].price)
    console.log("Only", array[i].stock_quantity , "left in stock!")
  }
}





