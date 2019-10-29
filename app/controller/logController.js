
var {log_fixtures}=require('../models')



  
const getlog = (req, res, next) => {
  log_fixtures.findAll() .then(data => {
    console.log("succes", data)
    res.send(data);
  }).catch(err => {
    console.log("fail",err)
    res.render('index', { title: 'API' });
  })
    
  }
  const getlogbyid = (req, res, next) => {
    log_fixtures.findByPk(req.params.id) .then(data => {
      res.send(data);
    }).catch(err => {
      res.render('index', { title: 'API' });
    })
      
    }
  

  module.exports = {getlog,getlogbyid}