const Router = require('express').Router()
const controller = require('../controllers/PlanetController')

Router.post('/', controller.addPlanet)
Router.get('/:name', controller.getPlanetByName)
Router.get('/moons/:name', controller.getPlanetWithMoons)
Router.put('/:planet_id', controller.updatePlanet)
Router.delete('/:planet_id', controller.deletePlanet)

module.exports = Router