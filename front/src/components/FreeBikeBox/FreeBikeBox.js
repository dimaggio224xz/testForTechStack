import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';

import makePrice from '../makePrice';


const FreeBikeBox = (props) => {

    const data = props.data;

    const moveToRent = () => {
        props.moveToRent(data)
    }

    const deleteBike = () => {
        props.deleteBike(data._id)
    }

    return (
        <>
        <div className='bike-box'>
            <div className='bike-box-data'>
                <div className='bike-box-name'>
                    {data.name}
                </div>

                <div className='bike-box-dash'>/</div>

                <div className='bike-box-type'>
                    {data.type}
                </div>

                <div className='bike-box-dash'>/</div>

                <div className='bike-box-price'>
                    {makePrice(data.price)}
                </div>

            </div>

            <div className='d-flex'>
                <button onClick={()=>moveToRent()} className='blue-btn'>Rent</button>
                <button onClick={()=>deleteBike()} className='red-btn'>Delete</button>
            </div>
        </div>
        </>
    )
}

export default connect( null, mapDispatchToProps )(FreeBikeBox);