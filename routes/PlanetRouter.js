const Router = require('express').Router()
const controller = require('../controllers/PlanetController')

Router.get('/', controller.getPlanetByName)
Router.post('/', controller.addPlanet)

module.exports = Router