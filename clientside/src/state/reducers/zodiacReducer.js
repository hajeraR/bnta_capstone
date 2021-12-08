const zodiacReducer = (state = [], action) => {

    switch (action.type) {
        // case "getDescription":
        //     return state;
        
        case "setDescription":
            state = action.payload;
            return state;
    
        default:
            return state;
    }
}

export default zodiacReducer;