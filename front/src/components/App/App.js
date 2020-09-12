import React from 'react';
import { connect } from 'react-redux';
import CreateNewRent from '../CreateNewRent';
import ShowError from '../ShowError';


const App = () => {

    return (
        <>
        <div className='wrapper'>
            <ShowError/>
            
            <div className='container'>
                <h1 className='title'>Awesome Bike Rental</h1>

                
                
                <CreateNewRent/>
            </div>
        </div>
        </>
    )
}


const mapStateToProps = (store) => ({...{error: store.error}});

export default connect( mapStateToProps )(App);