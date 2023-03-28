const Router = require('express').Router()
const controller = require('../controllers/MoonController')

Router.get('/', controller.getMoonByPlanet)

module.exports = Router