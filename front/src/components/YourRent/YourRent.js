import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';
import RentBikeBox from '../RentBikeBox';

import makePriceView from '../makePriceView';

const mapStateToProps = (store) => ({rentedBikes: store.rentedBikes});



const YourRent = (props) => {

    const rentedBikes = props.rentedBikes;

    

    
    useEffect(()=>{
        props.putRentedBikes()
    },[])

    let totalPrice = getPrice(rentedBikes);
    let arrOfBikes = rentedBikes.map(i=> <RentBikeBox key={i._id} data={i}/>)

    useEffect(()=> {
        arrOfBikes = rentedBikes.map(i=> <RentBikeBox key={i._id} data={i}/>);
        totalPrice = getPrice(rentedBikes);
    }, [props.rentedBikes])



    return (
        <div className='rented-bikes'>

            <div className='d-flex'>
                <h2>Your rent (Total: ${totalPrice})</h2>
            </div>

            {arrOfBikes}

        </div>
    )
}



export default connect( mapStateToProps, mapDispatchToProps )(YourRent);