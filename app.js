var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

let campgrounds = [
    {name: "Stone Mountain", image: "https://acadiamagic.com/280x187/md-campground.jpg"},
    {name: "Stone Mountain", image: "https://acadiamagic.com/280x187/md-campground.jpg"},
    {name: "Stone Mountain", image: "https://acadiamagic.com/280x187/md-campground.jpg"},
    {name: "Stone Mountain", image: "https://acadiamagic.com/280x187/md-campground.jpg"},
    {name: "Stone Mountain", image: "https://acadiamagic.com/280x187/md-campground.jpg"},
    {name: "Stone Mountain", image: "https://acadiamagic.com/280x187/md-campground.jpg"}
    
]

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



// SCHEMA SETUP 
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

var Campground = mongoose.model("Campground",campgroundSchema)

// Campground.create({
//     name: "Stone Hill", image: "https://acadiamagic.com/280x187/md-campground.jpg", description: "Huge campground"
// } , function(err, campground){

//     if(err) {
//     console.log(err);
// }  else {
//     console.log("NEW CAMPGROUND");
//     console.log(campground);
// }
// })

app.get("/",function(req,res){
    res.render("landing")
})


app.get("/campgrounds",function(req,res){
    Campground.find({}, function(err,allCampgrounds){
        if(err){
            console.log(err);
        }
        else {
            res.render("index",{campgrounds:allCampgrounds})
        }
    })
    // res.render("campgrounds", {campgrounds:campgrounds})
})

app.post("/campgrounds", function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {
        name: name,
        image:image
    }
Campground.create(newCampground,function(err,newlyMade){
    if(err) {
        console.log(err);
    }
    else {
        res.redirect("/campgrounds");
    }
})
})

app.get("/campgrounds/new", function(req,res) {
res.render("new")
})


app.get("/campgrounds/:id",function(req,res){
    // found campground w provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err)
        }
    else {
        res.render("show", {campground : foundCampground});
    }
    })
  
})

app.listen(3000,function(){
    console.log("yelpcamp server is running")
})