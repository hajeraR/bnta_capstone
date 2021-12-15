import { combineReducers } from 'redux';

import descriptionsReducer from './descriptionsReducer';
import calendarsReducer from './calendarsReducer';
import iconClickReducer from './iconClickReducer';

const rootReducer = combineReducers({
    descriptions: descriptionsReducer,
    calendars: calendarsReducer,
    clicked: iconClickReducer,
})

export default rootReducer;