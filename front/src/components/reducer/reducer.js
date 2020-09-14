const initialState = {
    freeBikes: [],
    rentedBikes: [],
    error: false,
    calcPrice: {
        fullPrice: 0,
        chack: 0
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'PUT_FREE_BIKES':
            return {...state, ...{freeBikes: action.data}};

        case 'PUT_RENTED_BIKES':
            return {...state, ...{rentedBikes: action.data}};

        case 'PUT_RENT_AND_FREE':
            return {...state, ...{freeBikes: action.free, rentedBikes: action.rent}};

        case 'CHACK_AND_PUT_PRICE':
            return {...state, ...{calcPrice: {fullPrice: action.fullPrice, chack: action.chack} }};

        case 'SET_ZERO_TO_PRICE':
            return {...state, ...{calcPrice: {fullPrice: 0, chack: 0} }};

        case 'SHOW_ERROR':
            return {...state, ...{error: true}};

        case 'HIDE_ERROR':
            return {...state, ...{error: false}};

        default:
            return state;
    }
    
}


export default reducer;