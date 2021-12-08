import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers/reducerIndex";
// import monthlyReducer from "./reducers/monthlyReducer";
// import zodiacReducer from "./reducers/zodiacReducer";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)