var eightBall = require('../services/fortunes')

module.exports = {
  fortune: function (req, res) {
    var newFortune = eightBall.getRandom();
    res.json(newFortune)
  }
}
