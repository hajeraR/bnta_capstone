export const GET_DESCRIPTIONS = 'GET_DESCRIPTIONS'
export const GET_DESCRIPTIONS_SUCCESS = 'GET_DESCRIPTIONS_SUCCESS'
export const GET_DESCRIPTIONS_FAILURE = 'GET_DESCRIPTIONS_FAILURE'

export const getDescriptions = () => ({
    type: GET_DESCRIPTIONS,
  })
  
  export const getDescriptionsSuccess = (descriptions) => ({
    type: GET_DESCRIPTIONS_SUCCESS,
    payload: descriptions,
  })
  
  export const getDescriptionsFailure = () => ({
    type: GET_DESCRIPTIONS_FAILURE,
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