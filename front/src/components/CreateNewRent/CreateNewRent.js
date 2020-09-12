import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';


const CreateNewRent = (props) => {

    const [bikeName, setBikeName] = useState('');
    const [bikeType, setBikeType] = useState('Road');
    const [bikePrice, setBikePrice] = useState('');

    const submitData = () => {
        if (bikeName !== '' && bikePrice !== '' && +bikePrice !== 0) {
            props.putFreeBikes(bikeName, bikeType, bikePrice);
            setBikeName('');
            setBikeType('Road');
            setBikePrice('');
        }
    }


    const chackbikePriceAndSet = (e) => {
        let price = e.target.value;

        if (chackPrice(price))
            setBikePrice(price);
    }


    const chackPrice = (i) => {
        if ( isNaN(i) || i[0] === '-' || i[0] === '+' ||
            (i.indexOf('.') !== -1 && i.length - i.indexOf('.') > 3)) {
            return false;
        }
        else 
            return true;
    }


    return (
        <>
        <div className='new-rent'>
            <div className='d-flex'>
                <h2>Create new rent</h2>
            </div>
            <div className='new-rent-wrapper'>
                <label>
                    <span>Bike name</span>
                    <input onChange={(e)=>setBikeName(e.target.value)} value={bikeName} type='text'></input>
                </label>

                <label>
                    <span>Bike type</span>
                    <select value={bikeType} onChange={(e)=>setBikeType(e.target.value)}>
                        <option value="Road">Road</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Hybrid/Comfort">Hybrid/Comfort</option>
                        <option value="Cyclocross">Cyclocross</option>
                        <option value="Commuting">Commuting</option>
                        <option value="Track Bike">Track Bike</option>
                    </select>
                </label>

                <label>
                    <span>Rent Price</span>
                    <input onChange={(e)=>chackbikePriceAndSet(e)} value={bikePrice} type='text'></input>
                </label>

                <button onClick={()=>submitData()}>Submit rent</button>
            </div>
            
        </div>
        </>
    )
}




export default connect( null, mapDispatchToProps )(CreateNewRent);