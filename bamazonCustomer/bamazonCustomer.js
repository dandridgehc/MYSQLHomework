//REQUIRE NODE PACKAGES
var mysql = require("mysql");
var inquirer = require("inquirer");
// require("console.table");



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

//test error handle to test connection, else start bamazon
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  getData()
});


//function to get full array of objects from products database 
function getData(){
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        //console.log(res);
        productList(res)
        promptCustomerChoice();
        connection.end();
        
      });  
}

//function to get products listed
function productList(array) {

  var itemId;  
  for(i=0;i<array.length;i++){
    //console.log(array[i])
    itemId = array[i].item_id
    console.log("ID:", itemId)
    console.log("Product:", array[i].product_name)
    console.log("Price:", array[i].price)
    console.log("Only", array[i].stock_quantity , "left in stock!")
  }
}

var sampleQuestion = "test this"
function promptCustomerChoice(input) {
  // prompt to get custmer input and record it
  
  
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "Pick a product by it's ID#",
        choices: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
  
        case "Find all artists who appear more than once":
          multiSearch();
          break;
  
        case "Find data within a specific range":
          rangeSearch();
          break;
  
        case "Search for a specific song":
          songSearch();
          break;
        }
      });
  
  
  

}




