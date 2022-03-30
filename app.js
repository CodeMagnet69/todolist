const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = [];
let shoppingItems = [];
let day = date.getDay();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("list", {listTitle: "General List", kindOfDay: day, newListItems: items} )
});

app.get("/shopping", function(req, res){
    res.render("list", {listTitle: "Shopping List", kindOfDay: day, newListItems: shoppingItems } )
})

app.get("/aboutMe", function(req,res){
    res.render("aboutMe", {listTitle: "Shopping List", kindOfDay: day, newListItems: shoppingItems } )
})

app.post("/", function(req, res){

    let newItem = req.body.newListItems;

    if(req.body.subButton === "Shopping"){
        console.log("It works?")
        shoppingItems.push(newItem);
        res.redirect("/shopping");

    }else{if(req.body.subButton === "General"){
        items.push(newItem);
        console.log("items")
        res.redirect("/");
    }
    }


});

app.post("shopping", function(req, res){
    let newShoppingItem = req.body.newListItems;
    shoppingItems.push(newShoppingItem);

    res.redirect("shopping");
})


app.listen("3000", function () {
    console.log("server is on port 3000");
});
