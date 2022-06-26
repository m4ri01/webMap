const mongoose = require('mongoose');

const BTSSchema = new mongoose.Schema({
    nodeBID:{
        type: Number,
        required: [true,"masukan nama tempat"],
    },
    longitude:{
        type: String,
        required: [true,"masukan longitude"],
    },
    latitude:{
        type: Number,
        required: [true,"masukan latitude"],
    },
    antennaHeight: {
        type: Number,
        required: [true,"masukan tinggi antenna"],
    },
    band: {
        type: Number,
        required: [true,"masukan band"],
    },
    bandwidth: {
        type: Number,
        required:[ true,"masukan bandwidth"],
    },
    scPower: {
        type: Number,
        required: [true,"masukan subcarrier power"],
    },
    EIRP: {
        type: Number,
        required: [true,"masukan EIRP"]
    },
    pnLoss: {
        type: Number,
        required: [true,"masukan penertration loss"]
    },
    shadowFading: {
        type: Number,
        required: [true,"masukan shadow Fading"],
    },
    MAPL:{
        type: Number,
        required: [true,"masukan MAPL"]
    },
    radius: {
        type: Number,
        required: [true,"masukan radius"]
    }
},  {timestamps: true});

module.exports = mongoose.model('BTS',BTSSchema); 