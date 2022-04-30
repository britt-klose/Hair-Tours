const { Schema } = require('mongoose');

const servicesSchema= new Schema({
    name: {
        type: String,
        required: true,
      },
    price:{
        type: Number,
        default: 0,
    }
})

module.exports=servicesSchema