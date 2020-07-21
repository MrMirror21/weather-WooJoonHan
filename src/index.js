const axios = require("axios");
require('dotenv').config();

const latitude = 37.315281;
const longitude = 127.082592;
const apiKey = process.env.apiKey;

const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;



axios.get(url).then(function(res) {
    //console.log(res.data);
    const weather = res.data.weather[0].main;
    const temperature = Math.floor(res.data.main.temp - 273);
    const city = res.data.name;

    console.log(String(city) + "의 날씨는 " + String(weather) + "입니다.");
    console.log(String(city) + "의 기온은 " + String(temperature) + "입니다.");
    
})