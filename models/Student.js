const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name :{
        type : String,
        require: true
    },
    email:{
        type: String,
        require : true
    },
    city:{
        type : String,
        default: "Sahjanwa"

    },
    age :{
        type : Number
        
    }

}, {
    timetamps: true
});

module.exports = mongoose.model("Student", studentSchema);