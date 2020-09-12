import React from 'react';

import CreateNewRent from '../CreateNewRent';

const App = () => {

    return (
        <>
        <div className='wrapper'>
            <div className='container'>
            <h1 className='title'>Awesome Bike Rental</h1>
            
                <CreateNewRent/>
            </div>
        </div>
        </>
    )
}

export default App;