import { combineReducers } from 'redux'

import descriptionsReducer from './descriptionsReducer'
import calendarsReducer from './calendarsReducer';

const rootReducer = combineReducers({
    descriptions: descriptionsReducer,
    calendars: calendarsReducer,
})

export default rootReducer;