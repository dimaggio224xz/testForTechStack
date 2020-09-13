import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';
import FreeBikeBox from '../FreeBikeBox';

const mapStateToProps = (store) => ({freeBikes: store.freeBikes});

const AvailableBicycles = (props) => {
    
    useEffect(()=>{
        props.putFreeBikes()
    },[])

    
    let amount = props.freeBikes.length;
    let arrOfBikes = props.freeBikes.map(i=> <FreeBikeBox key={i._id} data={i}/>)

    useEffect(()=> {
        amount = props.freeBikes.length;
        arrOfBikes = props.freeBikes.map(i=> <FreeBikeBox key={i._id} data={i}/>)
    }, [props.freeBikes])

    return (
        <div className='free-bikes'>

            <div className='d-flex'>
                <h2>Available bicycles ({amount})</h2>
            </div>

            {arrOfBikes}

        </div>
    )
}



export default connect( mapStateToProps, mapDispatchToProps )(AvailableBicycles);