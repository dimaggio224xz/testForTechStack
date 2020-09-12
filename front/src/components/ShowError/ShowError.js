import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';

const ShowError = () => {
    
    return (
        <>
        <div className='error'>
            <div className='error-block'>
                <div className='error-msg'>
                    Something go wrong...
                </div>

                <button className='btn btn-secondary'>Ok!</button>
            </div>
        </div>
        </>
    )
}

export default connect( null, mapDispatchToProps )(ShowError);