const mongoose = require('mongoose');
const model = require('./models/index');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/foodDataBank')

const db = mongoose.connection;

db.on('error' , console.error.bind(console, 'connection error'));

db.once('open' , function() {
  console.log('waka waka db')
})
