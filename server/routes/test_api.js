
var express = require("express");
var app = express();
var router = express.Router();
var test_api_ctrl = require('../controllers/test_api_ctrl');


router.put('/test_api', test_api_ctrl.test_api);


module.exports = router;
