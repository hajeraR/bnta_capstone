export const setDescription = (description) => {
    return (dispatch) => {
        dispatch({
            type: "setDescription",
            payload: description
        })
    }
}

export const setMonthlyHorrorScope = (horrorscope) => {
    return (dispatch) => {
        dispatch({
            type: "setHorrorscope",
            payload: horrorscope
        })
    }
}
