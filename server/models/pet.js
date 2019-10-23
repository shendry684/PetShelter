const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be 2 characters or longer"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 2 characters or longer"]
    },
    pettype: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [2, "Pet type must be 2 characters or longer"]
    },
    skill1: {
        type: String,
        
    },
    skill2: {
        type: String,
       
    },
    skill3: {
        type: String,
        
    },
    like: {
        type: Number,
        default: 0
    },
    
    
}, {timestamps:true});

mongoose.model("Pet", PetSchema);

