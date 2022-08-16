const axios = require('axios');
require('custom-env').env()

class WeatherController {

    static async getWeatherByCity(city) {

        let cityWeatherObject;

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
            cityWeatherObject = {
                "cityName": response.data.name,
                "weather": response.data.main
            }
        } catch (error) {
            console.log(error)
            cityWeatherObject = {
                "code": error.response.data.cod,
                "message": error.response.data.message
            }
          }
        
        return cityWeatherObject
    };
}

module.exports = WeatherController