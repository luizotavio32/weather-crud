class WeatherController {

    static async getWeatherByCity(city) {

        
        if (typeof city === 'string' || city instanceof String) {
            return "its a string"
        }
        else {
            return "not a string"
        }
        

    };
}


module.exports = WeatherController;
