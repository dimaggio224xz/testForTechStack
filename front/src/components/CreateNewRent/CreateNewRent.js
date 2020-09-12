import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const CreateNewRent = (props) => {
    return (
        <>
        <div className='new-rent'>
            <div className='d-flex'>
                <h2>Create new rent</h2>
            </div>
            <div className='new-rent-wrapper'>
                <label>
                    <span>Bike name</span>
                    <input></input>
                </label>

                <label>
                    <span>Bike type</span>
                </label>

                <label>
                    <span>Rent Price</span>
                    <input></input>
                </label>

                <button>Submit rent</button>
            </div>
            
        </div>
        </>
    )
}



const mapStateToProps = (store) => ({...store});
export default connect( mapStateToProps )(CreateNewRent);