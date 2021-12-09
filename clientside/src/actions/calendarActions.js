export const GET_CALENDARS = 'GET_CALENDARS'
export const GET_CALENDARS_SUCCESS = 'GET_CALENDARS_SUCCESS'
export const GET_CALENDARS_FAILURE = 'GET_CALENDARS_FAILURE'

export const getCalendars = () => ({
    type: GET_CALENDARS,
  })
  
  export const getCalendarsSuccess = (calendars) => ({
    type: GET_CALENDARS_SUCCESS,
    payload: calendars,
  })
  
  export const getCalendarsFailure = () => ({
    type: GET_CALENDARS_FAILURE,
  })

  export const calendarsSelector = (state) => state.calendars;

  export function fetchCalendars() {
    return async (dispatch) => {
      dispatch(getCalendars())
  
      try {
        const response = await fetch('http://localhost:8080/api/v1/monthly')
        const data = await response.json()
        console.log("try");
  
        dispatch(getCalendarsSuccess(data))
      } catch (error) {
        console.log("fail");
        dispatch(getCalendarsFailure())
      }
    }
  }