const express = require('express')
const router = express.Router()

const weatherController = require('./controllers/weatherController')

router.get('/weather/:city', async (req, res) => {

    // #swagger.tags = ['City']
    const city = req.params.city;


    let objectReturn =  await weatherController.getWeatherByCity(city)


    /* #swagger.responses[404] = {
        description: 'City not found'
    } */
    if (objectReturn.code === '404') {
    
        return res.status(404).send(objectReturn)
    }

    /* #swagger.responses[200] = {
        schema: { $ref: "#/definitions/CityWeather" },
        description: 'City Weather returned sucesfully'
    } */

    return res.status(200).send(objectReturn)







})


module.exports = router