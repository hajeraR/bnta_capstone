import { combineReducers } from "redux";
import monthlyReducer from "./monthlyReducer";
import zodiacReducer from "./zodiacReducer";

const reducers = combineReducers({
    monthlyHorrorScope: monthlyReducer,
    zodicDescription: zodiacReducer
});

export default reducers;