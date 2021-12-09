import * as actions from '../actions/calendarActions'

export const initialState = {
    calendars: [],
    loading: false,
    hasErrors: false,
  }
  
  export default function calendarsReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_CALENDARS:
        return { ...state, loading: true }
      case actions.GET_CALENDARS_SUCCESS:
        return { calendars: action.payload, loading: false, hasErrors: false }
      case actions.GET_CALENDARS_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }