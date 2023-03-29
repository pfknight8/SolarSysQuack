const { Planet } = require('../models')

const getPlanetByName = async (req, res) => {
  try {
    let planetName = req.params.name
    const planet = await Planet.findOne({
      where: {name: planetName},
      raw: true
    })
    if (planet){
      return res.status(200).json({planet})
    } else {
      return res.status(404).send({message: 'Planet not found in database!'})
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addPlanet = async (req, res) => {
  try {
    let createPlanet = await Planet.create(req.body)
    return res.status(200).json({createPlanet})
  } catch (error) {
    throw error
  }
}

const updatePlanet = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    await Planet.update(req.body, {
      where: {
        id: planetId
      },
    })
    return res.status(200).send({message: "Planet data updated."})
  } catch (error) {
    throw error
  }
}

const deletePlanet = async (req, res) => {
  try {
    let planetId = parseInt(req.params.planet_id)
    await Planet.destroy({
      where: { id: planetId }
    })
    return res.status(200).send({ message: 'Planet has been deleted!'})
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPlanetByName,
  addPlanet,
  updatePlanet,
  deletePlanet
}