const request = require("postman-request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ca7abdaac6d121fbed6c78d594d91231&query=' + latitude + "," + longitude + '&units=f'
    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to the weather service', undefined)
        } else if(body.error) {
            callback('Unable to find that location?', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' today. The temperature is ' + body.current.temperature + ' degrees fahrenheit, and the wind speed is ' + body.current.wind_speed + ' miles per hour. It feels like ' + body.current.feelslike + ' degrees fahrenheit.')
            }
        })
    }

module.exports = forecast