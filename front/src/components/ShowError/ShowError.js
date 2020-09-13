import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';

const ShowError = (props) => {

    const errorOf = () => {
        props.errorOf();
    }
    
    return (
        <>
        <div className='error'>
            <div className='error-block'>
                <div className='error-msg'>
                    Something go wrong...
                </div>

                <button onClick={()=> errorOf()} className='btn btn-light'>Ok!</button>
            </div>
        </div>
        </>
    )
}

export default connect( null, mapDispatchToProps )(ShowError);