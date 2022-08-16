const express = require('express')
const router = express.Router()

const weatherController = require('./controllers/weatherController')

router.get('/weather/:city', async (req, res) => {

    // #swagger.tags = ['City']
    const city = req.params.city;

    let objectReturn = await weatherController.getWeatherByCity(city);

    res.send(objectReturn)

})


module.exports = router