import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';
import RentBikeBox from '../FreeBikeBox';

const mapStateToProps = (store) => ({rentedBikes: store.rentedBikes});


const YourRent = (props) => {

    const rentedBikes = props.rentedBikes;
    
    useEffect(()=>{
        props.putRentedBikes()
    },[])


    let arrOfBikes = rentedBikes.map(i=> <RentBikeBox key={i._id} data={i}/>)

    useEffect(()=> {
        arrOfBikes = rentedBikes.map(i=> <RentBikeBox key={i._id} data={i}/>)
    }, [props.rentedBikes])

    let totalPrice;
    if (rentedBikes.length === 0) {
        totalPrice = 0;
    }

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