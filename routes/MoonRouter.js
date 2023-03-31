const Router = require('express').Router()
const controller = require('../controllers/MoonController')

Router.get('/', controller.getAllMoons)
Router.get('/:name', controller.getMoonsByPlanet)
Router.get('/planet/:moon_id', controller.getMoonWithPlanet)

module.exports = Router