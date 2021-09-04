
var express = require("express");
var app = express();
var router = express.Router();
var test_api_ctrl = require('../controllers/downloadYtThumbController ');


router.put('/download_yt_thumbnail', test_api_ctrl.downloadYoutubeThumbnail);


module.exports = router;
