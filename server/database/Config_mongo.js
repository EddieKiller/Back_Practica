const mongoose = require('mongoose');

const uriMongoLocal = 'mongodb://127.0.0.1:27017/Gamebox';


mongoose.connect(uriMongoLocal).catch(error => 
  console.log(error)
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Mongo DB conectado!');
});
