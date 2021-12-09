import { combineReducers } from 'redux'

import descriptionsReducer from './descriptionsReducer'

const rootReducer = combineReducers({
    descriptions: descriptionsReducer,
})

export default rootReducer;