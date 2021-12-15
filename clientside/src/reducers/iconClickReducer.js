

const initialState = 0
  
const iconClickReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ICON_CLICK":
        return state + 1;
      default:
        return state
    }
  }

  export default iconClickReducer;