const Router = require('express').Router()
const PlanetRouter = require('./PlanetRouter')
const MoonRouter = require('./MoonRouter')

Router.use('/planet', PlanetRouter)
Router.use('/moon', MoonRouter)

module.exports = Router