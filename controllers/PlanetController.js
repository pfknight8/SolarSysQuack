const { Planet } = require('../models')

const getPlanetByName = async (req, res) => {
  try {
    let planetName = req.query.name
    const planet = await Planet.findOne({
      where: {name: planetName},
      raw: true
    })
    if (planet){
      res.status(200).json({planet})
    } else {
      res.status(404).send({message: 'Planet not found in database!'})
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const addPlanet = async (req, res) => {
  try {
    let createPlanet = await Planet.create(req.body)
    res.status(200).json({createPlanet})
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPlanetByName,
  addPlanet
}