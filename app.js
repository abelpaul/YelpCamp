var express = require("express");
var app = express();
var bodyParser = require("body-parser");

let campgrounds = [
    {name: "Salmon Creek", image: "http://www.suttonfalls.com/communities/4/004/012/498/244//images/4628314067.jpg"},
    {name: "Stone Mountain", image: "https://acadiamagic.com/280x187/md-campground.jpg"},
    {name: "Yee Haw Forest", image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"}
]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("landing")
})


app.get("/campgrounds",function(req,res){
    
    res.render("campgrounds", {campgrounds:campgrounds})
})

app.post("/campgrounds", function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {
        name: name,
        image:image
    }
campgrounds.push(newCampground);
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req,res) {
res.render("new")
})

app.listen(3000,function(){
    console.log("yelpcamp server is running")
})