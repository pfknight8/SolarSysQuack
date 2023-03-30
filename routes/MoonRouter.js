const Router = require('express').Router()
const controller = require('../controllers/MoonController')

Router.get('/:name', controller.getMoonsByPlanet)

module.exports = Router