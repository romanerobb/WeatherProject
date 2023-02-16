const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=25a9793482b86fde4b8f4e9549483d09&units=metric";
    
    https.get(url, function(response){
        console.log(response.statusCode);
    })

    res.send("Server is up and running.")
})

app.listen(3000, function() {
    console.log("This Server is running on port 3000.");
})