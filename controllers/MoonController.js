const { Moon } = require('../models')

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

module.exports = {
  getMoonsByPlanet
}