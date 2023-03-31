const { Moon, Planet } = require('../models')

const getMoonsByPlanet = async (req, res) => {
  try {
    let planetName = parseInt(req.params.name)
    const moons = await Moon.findAll({
      where: {planet_id: planetName},
      raw: true
    })
    if (moons){
      res.status(200).json({moons})
    } else {
      res.status(404).send({message: 'Moons not found in database!'})
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getMoonWithPlanet = async (req, res) => {
  try {
    let moonId = parseInt(req.params.moon_id)
    const moonWithPlanet = await Moon.findOne({
      where: {id: moonId},
      include: [{model: Planet, as: "orbits"}]
    })
    res.status(200).json(moonWithPlanet)
  } catch (error) {
    throw error
  }
}

const getAllMoons = async (req, res) => {
  try {
    const moons = await Moon.findAll()
    res.status(200).json(moons)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getMoonsByPlanet,
  getMoonWithPlanet,
  getAllMoons
}