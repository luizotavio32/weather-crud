const express = require('express')
const router = express.Router()

const weatherController = require('./controllers/weatherController')

router.get('/weather/', async (req, res) => {
    const city = req.params.city;

    let objectReturn = await weatherController.getWeatherByCity(city);

    res.send(objectReturn)

})


module.exports = router