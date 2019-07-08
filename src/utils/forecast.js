const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url='https://api.darksky.net/forecast/4d67c26a46f114fb79f208ab0c3c28c4/' + longitude + ', ' + latitude   
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (body.error) {
            callback('Error ' + body.code + ': ' + body.error, undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '°F. The high today is ' + body.daily.data[0].temperatureHigh + '°F with a low of ' + body.daily.data[0].temperatureLow + '°F. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })  
}

module.exports = forecast