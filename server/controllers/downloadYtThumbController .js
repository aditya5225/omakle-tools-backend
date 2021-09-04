
var Jimp = require('jimp');


exports.downloadYoutubeThumbnail = async (req, res, next) => {

    let response = {};
    let imageUrl= req.body.image_url

    try {

        // let getBufferData = await Jimp.read(imageUrl);

        // let base64Data = await getBufferData.getBase64Async(Jimp.MIME_PNG);

        response = {
            error: false,
            // data: base64Data,
            data: imageUrl,
            message: 'converted succefully'
        };

    } catch (err) {

        response = {
            error: true,
            message: `Error Occured: ${err}`
        };
    }

    res.json({
        data: response
    });
    next();
};
