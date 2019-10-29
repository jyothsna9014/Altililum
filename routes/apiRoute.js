var express = require('express');
var router = express.Router();
const logController = require('../app/controller/logController');
const fixdetailscontroller=require('../app/controller/fixdetailscontroller');
const fixturesController=require('../app/controller/fixturesController')
/* GET home page. */
router.get('/log', logController.getlog);       
router.get('/log/:id', logController.getlogbyid);
router.get('/log',fixturesController.getfixtures);

router.get('/fixturedetails',fixdetailscontroller.getfixturedetails);
router.get('/fixtures',fixturesController.getfixtures)


module.exports = router;