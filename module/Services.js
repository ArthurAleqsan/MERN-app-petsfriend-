const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicesSchema = new Schema({

            pet_id : Number,
            services : [String],
            icons : [String]
});


module.exports = Services = mongoose.model('Services',ServicesSchema);