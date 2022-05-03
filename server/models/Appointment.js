const{Schema}= require('mongoose');

const apptSchema=new Schema({
    ApptId:{
    type: String,
    required: true
    },
     
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
    scheduledFor:{
        type: Date,
        default: Date.now,
    },
    stylist:{
        type: String,
        required: true,
    },
    client:{
        type: String,
        required: true,
    },
    service:{
        type: String,
        required: true,
    }
});

module.exports=apptSchema;