const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

mongoose.connect('mongodb://192.168.1.7/gdg-address');
app.use(require('./routes'));

/*const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Srodinger' });
kitty.save().then(() => console.log('meow'));*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
