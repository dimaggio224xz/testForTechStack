const initialState = {
    freeBikes: [],
    rentedBikes: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'PUT_FREE_BIKES':
            console.log( action)
            return {...state, ...{freeBikes: action.data}};

        case 'PUT_RENTED_BIKES':
            console.log( action)
            return {...state, ...{rentedBikes: action.data}};

        case 'PUT_RENT_AND_FREE':
            console.log( action)
            return {...state, ...{freeBikes: action.free, rentedBikes: action.rent}};

        case 'SHOW_ERROR':
            return {...state, ...{error: true}};

        case 'HIDE_ERROR':
            return {...state, ...{error: false}};

        default:
            return state;
    }
    
}


export default reducer;