import getServerData from '../getServerData';


const putFreeBikes = (data) => {
    return {
        type: 'PUT_FREE_BIKES',
        data
    }
}

const showError = () => {
    return {
        type: 'SHOW_ERROR'
    }
}



const putFreeBikesThunk = (name, type, price) => dispatch => {
    return getServerData.createNewBike(name, type, price)
        .then(res => {
            if (res.msg) {
                return dispatch(showError());
            } else
                return putFreeBikes(res)
        })
        .catch(err => dispatch(showError()))
};



const mapDispatchToProps = (dispatch) => {
    return {
        putFreeBikes: (name, type, price)=> dispatch(putFreeBikesThunk(name, type, price)),
    }
}

export default mapDispatchToProps;