var { fixtures } = require('../models')
var { log_fixtures } = require('../models');
const getfixturedetails = (req, res, next) => {

  fixtures.findAll({include :[{ model: log_fixtures, id:log_fixtures.fixtureId}]}).then(data => {
    console.log("succes", data)
    res.send(data);
  }).catch(err => {
    console.log("fail", err)
    res.render('index', { title: 'API' });
  })

}

module.exports = { getfixturedetails }
