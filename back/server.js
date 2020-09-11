const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

try {
    mongoose.connect('mongodb://localhost/techstack', {useNewUrlParser: true});
} catch (error) {
    handleError(error);
}

const Schema = mongoose.Schema;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const bicycleSchema = new Schema({
    name:  String,
    email: String,
    password: String,
    avatar: String,
    active: Boolean,
    admin: Boolean
    }
);
const Bicycle = mongoose.model('Bicycle', bicycleSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());






app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});