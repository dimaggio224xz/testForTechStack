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





app.get('/free-bikes', async (req, res) => {

    const sendData = await Bicycle.find({isRented: false}).sort({_id:-1});
    if (sendData) {
        res.end(JSON.stringify([...sendData]));
    }
    else {
        res.end(JSON.stringify({msg: 'ERROR'}));
    }
})

app.get('/rented-bikes', async (req, res) => {

    const sendData = await Bicycle.find({isRented: true}).sort({_id:-1});
    if (sendData) {
        res.end(JSON.stringify([...sendData]));
    }
    else {
        res.end(JSON.stringify({msg: 'ERROR'}));
    }
})


app.post('/move-to-rent', async (req, res) => {
    
    const {_id, time} = req.body;

    if (!_id || !time) {
        res.end(JSON.stringify({msg: 'ERROR'}));
        return;
    }

    Bicycle.findByIdAndUpdate(_id, { startRentTime: time, isRented: true },
        function(err) {
            if (err) {
                res.end(JSON.stringify({msg: 'ERROR1'}));
            } else {
                res.end(JSON.stringify({msg: 'SAVE'}));
            }
    })
})


app.put('/move-to-free/:id', (req, res) => {
    if(req.params.id) {
        const _id = req.params.id

        Bicycle.findByIdAndUpdate(_id, { startRentTime: 0, isRented: false },
            function(err) {
                if (err) {
                    res.end(JSON.stringify({msg: 'ERROR1'}));
                } else {
                    res.end(JSON.stringify({msg: 'SAVE'}));
                }
        })
    } 
    else {
        res.end(JSON.stringify({msg: 'ERROR'}))
    }
})



app.post('/create-new-bike', async (req, res) => {

    const {name, type, price} = req.body;
    
    if(!name || name.length>26 || checkType(type) || checkPrice(price)) {
        res.end(JSON.stringify({msg: 'ERROR'}));
        return;
    };
    const price100 = price*100;
    
    
    const newBicycle = await new Bicycle({name, type, price: price100, startRentTime: 0, isRented: false});
    await newBicycle.save(function (err, result) {
        if (err) {
            res.end(JSON.stringify({msg: 'ERROR1'}));
        } else {
            res.end(JSON.stringify({result}));
        }
    })
})


app.delete('/delete-bike/:id', async (req, res) => {
    if(req.params.id) {
        const _id = req.params.id;
        
        Bicycle.findByIdAndDelete(_id, function (err) { 
            if (err){ 
                res.end(JSON.stringify({msg: 'ERROR'}));
            } else {
                res.end(JSON.stringify({msg: 'DELETE'}));
            }
        }) 
    } 
    else {
        res.end(JSON.stringify({msg: 'ERROR2'}))
    }
});






function checkType(t) {
    const arrType = ['Road', 'Mountain', 'Hybrid/Comfort', 'Cyclocross', 'Commuting', 'Track Bike']
    return !arrType.includes(t)
}

function checkPrice(p) {
    if ( isNaN(p) || p[0] === '-' || p[0] === '+' ||
        (p.indexOf('.') !== -1 && p.length - p.indexOf('.') > 3)
        || +p === 0 || +p >= 10000) {
        return true;
    }
    else 
        return false;
}



app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});