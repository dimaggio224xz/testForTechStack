import getServerData from '../getServerData';


const putFreeBikes = (data) => {
    return {
        type: 'PUT_FREE_BIKES',
        data
    }
}

const putRentedBikes = (data) => {
    return {
        type: 'PUT_RENTED_BIKES',
        data
    }
}

const putRentAndFree = (rent, free) => {
    return {
        type: 'PUT_RENT_AND_FREE',
        rent,
        free
    }
}

const chackAndPutPrice = (fullPrice, chack) => {
    return {
        type: 'CHACK_AND_PUT_PRICE',
        fullPrice,
        chack
    }
}

const errorOn = () => {
    return {
        type: 'SHOW_ERROR'
    }
}

const errorOf = () => {
    return {
        type: 'HIDE_ERROR'
    }
}





const saveBikesThunk = (name, type, price) => (dispatch, getState) => {
    return getServerData.createNewBike(name, type, price)
        .then(res => {
            if (res.result) {

                let arr = getState().freeBikes;
                arr.unshift({...res.result});
                return dispatch(putFreeBikes([...arr]));

            }
            else {
                return dispatch(errorOn());
            }
        })
        .catch(err => dispatch(errorOn()))
};


const putFreeBikesThunk = () => dispatch => {
    return getServerData.getFreeBikes()
        .then(res => {
            if (res.msg) {
                return dispatch(errorOn());
            } else
                return dispatch(putFreeBikes(res));
        })
        .catch(err => dispatch(errorOn()))
}

const deleteBikeThunk = (_id) => (dispatch, getState) => {
    return getServerData.deleteBike(_id)
        .then(res => {
            if (res.msg && res.msg === 'DELETE') {

                const arr = getState().freeBikes;
                const resultArr = arr.filter(i=> i._id !== _id);
                return dispatch(putFreeBikes(resultArr));

            } else
                return dispatch(errorOn());
        })
        .catch(err => dispatch(errorOn()))
}

const putRentedBikesThunk = () => dispatch => {
    return getServerData.getRentedBikes()
    .then(res => {
        if (res.msg) {
            return dispatch(errorOn());
        } else
            return dispatch(putRentedBikes(res));
    })
    .catch(err => dispatch(errorOn()))
}

const moveToRentThunk = (obj) => (dispatch, getState)=> {
    const time = Date.now();
    return getServerData.moveToRent(obj._id, time)
    .then(res => {
        if (res.msg && res.msg === 'SAVE') {

            const arrRent = getState().rentedBikes;
            const arrFree = getState().freeBikes;
            arrRent.unshift({...obj, ...{isRented: true, startRentTime: time}});
            const arrFreeRes = arrFree.filter(i=> i._id !== obj._id);

            return dispatch(putRentAndFree([...arrRent], arrFreeRes))
            

        } else
            return dispatch(errorOn());
    })
    .catch(err => dispatch(errorOn()))
}

const moveToFreeThunk = (obj) => (dispatch, getState)=> {
    return getServerData.moveToFree(obj._id)
    .then(res => {
        if (res.msg && res.msg === 'SAVE') {

            const arrRent = getState().rentedBikes;
            const arrFree = getState().freeBikes;
            arrFree.unshift({...obj, ...{isRented: false, startRentTime: 0}});
            const arrRentRes = arrRent.filter(i=> i._id !== obj._id);

            return dispatch(putRentAndFree(arrRentRes, [...arrFree]))
            

        } else
            return dispatch(errorOn());
    })
    .catch(err => dispatch(errorOn()))
}


const chackAndPutPriceThunk = (chack) => (dispatch, getState)=> {

    if (chack !== getState().calcPrice.chack) {
        return getServerData.getFullPrice()
        .then(res => {
            if (res.fullPrice) {    
                return dispatch(chackAndPutPrice(res.fullPrice, chack))
            }
        })
        .catch(err => console.log(err))
    }
}








const mapDispatchToProps = (dispatch) => {
    return {
        saveBikes: (name, type, price)=> dispatch(saveBikesThunk(name, type, price)),
        errorOf: ()=> dispatch(errorOf()),
        putFreeBikes: ()=> dispatch(putFreeBikesThunk()),
        deleteBike: (_id)=> dispatch(deleteBikeThunk(_id)),
        putRentedBikes: ()=> dispatch(putRentedBikesThunk()),
        moveToRent: (obj)=> dispatch(moveToRentThunk(obj)),
        moveToFree: (obj)=> dispatch(moveToFreeThunk(obj)),
        chackAndPutPrice: (chack)=> dispatch(chackAndPutPriceThunk(chack))
    }
}

export default mapDispatchToProps;