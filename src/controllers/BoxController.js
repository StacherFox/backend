const Box = require('../models/Box');

class BoxController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const box = await Box.create(req.body);
    return res.json(box);
  }

  // eslint-disable-next-line class-methods-use-this
  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: { sort: { createdAt: -1 } },
    });

    return res.json(box);
  }
}

module.exports = new BoxController();
