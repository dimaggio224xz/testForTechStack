import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';
import RentBikeBox from '../RentBikeBox';

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

function getPrice(arr) {
    if(arr.length === 0) {
        return '0';
    }
    const onrHour = 3600000;
    const timeNow = Date.now();
    const timeArr = arr.map(i => {
        let num = +((timeNow - i.startRentTime) / onrHour).toFixed(0)+1;



        return num;
    });
    console.log(timeArr)

}



export default connect( mapStateToProps, mapDispatchToProps )(YourRent);