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
    type: String,
    price: Number,
    startRentTime: Number,
    isRented: Boolean
    }
);
const Bicycle = mongoose.model('Bicycle', bicycleSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());








app.post('/create-new-bike', (req, res) => {
    (async ()=>{
        const {name, type, price} = req.body;
        
        if(!name || checkType(type) || checkPrice(price)) {
            res.end(JSON.stringify({msg: 'ERROR'}));
        };
        const price100 = price*100;
        
        
        const newBicycle = await new Bicycle({name, type, price: price100, startRentTime: 0, isRented: false});
        await newBicycle.save(function (err) {
            if (err) {
                res.end(JSON.stringify({msg: 'ERROR'}));
                return console.error(err);
            }
        })

        const sendData = await Bicycle.find({isRented: false}).sort({_id:-1});

        if (sendData) {
            res.end(JSON.stringify({...sendData}));
        }
        else {
            res.end(JSON.stringify({msg: 'ERROR3'}));
        }

    })();
})








function checkType(t) {
    const arrType = ['Road', 'Mountain', 'Hybrid/Comfort', 'Cyclocross', 'Commuting', 'Track Bike']
    return arrType.includes(t)
}

function checkPrice(p) {
    if ( isNaN(p) || p[0] === '-' || p[0] === '+' ||
        (p.indexOf('.') !== -1 && i.length - p.indexOf('.') > 3) || +p === 0) {
        return false;
    }
    else 
        return true;
}



app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});