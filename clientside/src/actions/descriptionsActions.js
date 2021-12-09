export const GET_DESCRIPTIONS = 'GET_POSTS'
export const GET_DESCRIPTIONS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_DESCRIPTIONS_FAILURE = 'GET_POSTS_FAILURE'

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

  export function fetchDescriptions() {
    return async (dispatch) => {
      dispatch(getDescriptions())
  
      try {
        const response = await fetch('http://localhost:8080/api/v1/horrorScope')
        const data = await response.json()
  
        dispatch(getDescriptionsSuccess(data))
      } catch (error) {
        dispatch(getDescriptionsFailure())
      }
    }
  }