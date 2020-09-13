import getServerData from '../getServerData';


const putFreeBikes = (data) => {
    return {
        type: 'PUT_FREE_BIKES',
        data
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



const mapDispatchToProps = (dispatch) => {
    return {
        saveBikes: (name, type, price)=> dispatch(saveBikesThunk(name, type, price)),
        errorOf: ()=> dispatch(errorOf()),
        putFreeBikes: ()=> dispatch(putFreeBikesThunk()),
        deleteBike: (_id)=> dispatch(deleteBikeThunk(_id))
    }
}

export default mapDispatchToProps;