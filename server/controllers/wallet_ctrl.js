
var walletsdb = require("../mongo/models/wallets");



exports.wallet_details = (req, res, next) => {

    console.log(req.body);

    var response = '';

    try {
        response = 'Hello World!!!'
    } catch (err) {
        console.log(`Error Occured: ${err}`);
    }

    // res.responsedata = response;
    res.json({
        data: response
    });
    next();
};
