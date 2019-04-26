const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const ads = await Ad.find()
    return res.json(ads)
  }

  async show (req, res) {
    const ad = await Ad.findById(req.params.id)
    return res.json(ad)
  }

  async store (req, res) {
    const ad = await Ad.create({ ...req.body, author: req.userId })
    console.log(ad)
    return res.json(ad)
  }
  async update (req, res) {
    const ad = await Ad.findOneAndUpdate(req.params.id, req.body, {
      new: true // retorna ad atualizado
    })

    return res.json(ad)
  }
  async destroy (req, res) {
    await Ad.findOneAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new AdController()