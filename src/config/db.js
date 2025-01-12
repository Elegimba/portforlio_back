const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/portfolio')

// Para cuando suba la BD a online hay que substituir la línea 3 por la siguiente:
// mongoose.connect(process.env.MONGO_URL);