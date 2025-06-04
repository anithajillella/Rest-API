const mongoose = require('mongoose');

const BrandName = mongoose.Schema({
    brandname :{
        type : String,
        required:true,
    },
    data : {
        type :Date,
        defalt: Date.Now
    }
})

module.exports = mongoose.model('brandname',BrandName)