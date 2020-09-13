import React from 'react';
import { connect } from 'react-redux';

import ShowError from '../ShowError';
import CreateNewRent from '../CreateNewRent';
import YourRent from '../YourRent';
import AvailableBicycles from '../AvailableBicycles';

const mapStateToProps = (store) => ({error: store.error});

const App = (props) => {

    const error = props.error ? 'position-relative' : 'position-relative d-none';

    return (
        <>
        <div className='wrapper'>

            <div className={error}>
                <ShowError/>
            </div>
            
            
            <div className='container'>
                <h1 className='title'>Awesome Bike Rental</h1>

                <CreateNewRent/>

                <YourRent/>

                <AvailableBicycles/>
            </div>
        </div>
        </>
    )
}


export default connect( mapStateToProps )(App);