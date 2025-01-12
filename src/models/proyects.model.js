const { Schema, model } = require('mongoose');

const proyectsSchema = new Schema ({
    title: String,
    description: String,
    image: String,
    youtube: String,
    github: {
        back: String,
        front: String
    },
    linkToProyect: String,
    year: Number
});

const Proyects = model('proyects', proyectsSchema);
module.exports = Proyects;