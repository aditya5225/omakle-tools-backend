
var express = require("express");
var app = express();
var router = express.Router();
var wallet_controller = require('../controllers/wallet_ctrl');


router.put('/wallet_details', wallet_controller.wallet_details);


module.exports = router;
