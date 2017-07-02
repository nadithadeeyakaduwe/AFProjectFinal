const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const finalSchema = new Schema({
    Subject:{
         type : String,
        required : [true, 'Subject Feild is Required!!!']
    },
    Lecturer:{
        type: String,
        required : [true, 'Lecturer ZFeild is Required!!!']
    }
});

const Final = mongoose.model("Final",finalSchema);

module.exports = Final;
