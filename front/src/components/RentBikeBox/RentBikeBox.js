import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';

import makePrice from '../makePrice';


const RentBikeBox = (props) => {

    const data = props.data;

    const moveToFree = () => {
        
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

            <button onClick={()=>moveToFree()} className='red-btn'>Cancel rent</button>
        </div>
        </>
    )
}

export default connect( null, mapDispatchToProps )(RentBikeBox);