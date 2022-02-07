const express = require('express')
const app = express()
const port = 3000

app.get('/data/2.5/weather', get_weather)
function get_weather(req,response)
{
response.json(
    {
        "coord": {
          "lon": -123.262,
          "lat": 44.5646
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 281.59,
          "feels_like": 281.59,
          "temp_min": 279.1,
          "temp_max": 286.38,
          "pressure": 1024,
          "humidity": 75,
          "sea_level": 1024,
          "grnd_level": 1016
        },
        "visibility": 10000,
        "wind": {
          "speed": 1.07,
          "deg": 17,
          "gust": 1.14
        },
        "clouds": {
          "all": 22
        },
        "dt": 1642982860,
        "sys": {
          "type": 2,
          "id": 2010260,
          "country": "US",
          "sunrise": 1642952435,
          "sunset": 1642986538
        },
        "timezone": -28800,
        "id": 5720727,
        "name": "Corvallis",
        "cod": 200
      }
)
}
app.listen(port, () => {
console.log(`Get Server Started`)
})




// const express = require('express')
// const app = express()
// const PORT = 3000

// app.get('/data', g_weather)

// function g_weather(request,response){
//     response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50n"}],"base":"stations","main":{"temp":278.16,"feels_like":278.16,"temp_min":275.73,"temp_max":281,"pressure":1025,"humidity":78},"visibility":402,"wind":{"speed":0,"deg":0},"clouds":{"all":100},"dt":1642227125,"sys":{"type":2,"id":2012991,"country":"US","sunrise":1642175199,"sunset":1642208235},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
// }


// app.listen(PORT, () => {console.log("Hello World")})
