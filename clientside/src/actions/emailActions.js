export const GET_EMAIL = 'GET_EMAIL'
export const GET_EMAIL_SUCCESS = 'GET_EMAIL_SUCCESS'
export const GET_EMAIL_FAILURE = 'GET_EMAIL_FAILURE'

export const getDescriptions = () => ({
    type: GET_EMAIL,
  })
  
  export const getDescriptionsSuccess = (descriptions) => ({
    type: GET_EMAIL_SUCCESS,
    payload: descriptions,
  })
  
  export const getDescriptionsFailure = () => ({
    type: GET_EMAIL_FAILURE,
  })

  export const descriptionsSelector = (state) => state.descriptions;

  export function fetchDescriptions(sign) {
    return async (dispatch) => {
      dispatch(getDescriptions())
  
      try {
        const response = await fetch(`http://localhost:8080/api/v1/horrorScope/${sign}`)
        const data = await response.json()
        console.log("try");
        console.log(data)
  
        dispatch(getDescriptionsSuccess(data))
      } catch (error) {
        console.log("fail");
        dispatch(getDescriptionsFailure())
      }
    }
  }