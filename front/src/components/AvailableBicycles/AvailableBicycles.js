import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../redux/actions';
import FreeBikeBox from '../FreeBikeBox';

const mapStateToProps = (store) => ({freeBikes: store.freeBikes});

const AvailableBicycles = (props) => {

    const freeBikes = props.freeBikes;
    
    useEffect(()=>{
        props.putFreeBikes()
    },[])

    
    let amount = freeBikes.length;
    let arrOfBikes = freeBikes.map(i=> <FreeBikeBox key={i._id} data={i}/>)

    useEffect(()=> {
        amount = freeBikes.length;
        arrOfBikes = freeBikes.map(i=> <FreeBikeBox key={i._id} data={i}/>)
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