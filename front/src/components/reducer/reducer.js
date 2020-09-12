const initialState = {
    freeBikes: [],
    rentedBikes: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PUT_FREE_BIKES':
            return {...state, ...{freeBikes: action.data}};

        case 'SHOW_ERROR':
            return {...state, ...{error: false}};

        default:
            return state;
    }
    
}


export default reducer;