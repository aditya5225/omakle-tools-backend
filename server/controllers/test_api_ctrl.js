
// var walletsdb = require("../mongo/models/wallets");



exports.test_api = (req, res, next) => {

    console.log(req.body);

    var response = '';

    try {
        response = 'Hello World!!! test demo'
    } catch (err) {
        console.log(`Error Occured: ${err}`);
    }

    // res.responsedata = response;
    res.json({
        data: response
    });
    next();
};
