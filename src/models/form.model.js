const { Schema, model } = require('mongoose');

const formationSchema = new Schema({
    title: String,
    description: String,
    startYear: Number,
    endYear: Number
});

const Formation = model('formation', formationSchema);
module.exports = Formation;