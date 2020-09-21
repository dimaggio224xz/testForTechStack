import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../redux/actions';
import RentBikeBox from '../RentBikeBox';

import makePriceView from '../../tools/makePriceView';

const mapStateToProps = (store) => ({
    rentedBikes: store.rentedBikes,
    calcPrice: store.calcPrice
});



const YourRent = (props) => {

    const rentedBikes = props.rentedBikes;


    useEffect(()=>{
        props.putRentedBikes()
    },[])
    


    useEffect(()=>{
        let i = setInterval(()=>{
            if (rentedBikes.length === 0) {
                props.setZeroToPrice();
            }
            else {
                const time = Date.now()
                const chack = rentedBikes.map(i=> +((time - i.startRentTime)/3600000).toFixed(0)+1).reduce((a,b)=>a+b,0);
    
                props.chackAndPutPrice(chack);      //Total price counted on server. const chack - 
                                                    // it is  chackig has hour passes yet.
                                                    // when hour has passed, thunk make request on server and get total price
            }
        }, 500)
        return ()=>clearInterval(i);
    })


    let arrOfBikes = rentedBikes.map(i=> <RentBikeBox key={i._id} data={i}/>)
    useEffect(()=> {
        arrOfBikes = rentedBikes.map(i=> <RentBikeBox key={i._id} data={i}/>);
    }, [props.rentedBikes])


    let price = makePriceView(props.calcPrice.fullPrice)

    return (
        <div className='rented-bikes'>

            <div className='d-flex'>
                <h2>Your rent (Total: {price})</h2>
            </div>

            {arrOfBikes}

        </div>
    )
}



export default connect( mapStateToProps, mapDispatchToProps )(YourRent);