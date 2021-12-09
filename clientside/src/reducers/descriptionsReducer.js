import * as actions from '../actions/descriptionsActions'

export const initialState = {
    descriptions: [],
    loading: false,
    hasErrors: false,
  }
  
  export default function descriptionsReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_DESCRIPTIONS:
        return { ...state, loading: true }
      case actions.GET_DESCRIPTIONS_SUCCESS:
        return { posts: action.payload, loading: false, hasErrors: false }
      case actions.GET_DESCRIPTIONS_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }