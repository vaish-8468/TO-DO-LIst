const express= require("express");
const bodyParse= require("body-parser");
const date= require(__dirname+ "/date.js");  //as this module is locally made but not installed from npm
const app=express();



let items=["SDE Sheet", "Portfolio Project", "Amazon Interview"];
let WorkItem=[];
//declared an array globally which can be used in any of the below defined methods

app.set("view engine","ejs");

app.use(bodyParse.urlencoded({extended:true}));

app.use(express.static("public"));





app.get("/", function(req, res){

    let day= date.getDate();

    res.render("list",{
        ListTitle : day,
        newListItems: items
    });
});

app.get("/work", function(req,res){
    res.render("list", {ListTitle:" Work List", newListItems:WorkItem});
});



app.post("/", function(req,res){
    var item=req.body.newItem;
    if (req.body.list=="Work"){
        WorkItem.push(item);
        res.redirect("/work");
    }else{
    // console.log(item);
    items.push(item);
    res.redirect("/");}
    //redirects moves the compiler again to the app.get method defined and executes it all over again




})
app.listen(3000, function(){
    console.log("Server running on port 3000");
});