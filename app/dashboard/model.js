const mongoose = require('mongoose');

const pengukuranSchema = new mongoose.Schema({
    namaTempat:{
        type: String,
        required: [true,"masukan nama tempat"],
    },
    deskripsi:{
        type: String,
        required: [true,"masukan deskripsi"],
    },
    longitude:{
        type: Number,
        required: [true,"masukan longitude"]
    },
    latitude:{
        type: Number,
        required: [true,"masukan latitude"]
    },
    SNR: {
        type: Number,
        required: [true,"masukan nilai SNR"]
    },
    CNR: {
        type: Number,
        required: [true,"masukan nilai CNR"]
    },
    BER: {
        type: Number,
        required: [true,"masukan nilai BER"]
    },
    pathLoss: {
        type: Number
    }
},  {timestamps: true});

module.exports = mongoose.model('Pengukuran',pengukuranSchema);