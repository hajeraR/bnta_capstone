const monthlyReducer = (state = [], action) => {

    switch (action.type) {
        // case "getHorrorscope":
        //     return state;

        case "setHorrorscope":
            state = action.payload;
            return state;
            
    
        default:
            return state;
    }
}

export default monthlyReducer;