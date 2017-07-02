/**
 * Created by Naditha on 6/22/2017.
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/OPD');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(express.static(__dirname + "/Public"));

app.use('/HIS', require('./Routes/route'));

//error handling
app.use(function(err, req, res, next){
  // console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(4000, function () {
    console.log("4000 port is listning");
});
