var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var structure = new Schema({

    "wallet_title": String,
    "fk_customer_id": String,//customer id, merchant id
    "created_date": Date,
    "status": Number, //1 : Active, 1, 2 : Inactive
    "wallet_type": Number, //1 : customer, 2 : business 
    "wallet_amount": Number,
    "cashback_amount": { type: Number, default: 0 },
    "crown_points": { type: Number, default: 0 },
    "total_customers": { type: Number, default: 0 }, //if wallet type == 2
    "wallet_update_date": Date,
    "failed_transaction_count": { type: Number, default: 0 },

})
structure.index({fk_customer_id: 1, wallet_type: 1}, {unique: true});

module.exports = mongoose.model('Wallets', structure)