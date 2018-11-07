var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("landing")
})


app.get("/campgrounds",function(req,res){
    var campgrounds = [
        {name: "Salmon Creek", image: "http://www.suttonfalls.com/communities/4/004/012/498/244//images/4628314067.jpg"},
        {name: "Stone Mountain", image: "https://acadiamagic.com/280x187/md-campground.jpg"},
        {name: "Yee Haw Forest", image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"}
    ]
    res.render("campgrounds")
})

app.listen(3000,function(){
    console.log("yelpcamp server is running")
})