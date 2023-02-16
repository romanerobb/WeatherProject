const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=25a9793482b86fde4b8f4e9549483d09&units=metric";
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            res.send("The temperature in London is " + temp + "degrees Celcius.");
        })
    })

    // res.send("The Server is up and running.")
})