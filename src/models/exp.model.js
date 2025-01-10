const { Schema, model } = require('mongoose');

const experienceSchema = new Schema({
    title: String,
    description: String,
    startYear: Number,
    endYear: Number
});

const Experience = model('experience', experienceSchema);
module.exports = Experience;