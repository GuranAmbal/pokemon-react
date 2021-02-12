const initialState = {
    items: [],
    isLoaded: false
}

const pokemon = (state = initialState, action) => {

    if (action.type == "SET_POKEMON") {
        return {
            ...state,
            items: action.payload.results
        }

    }
    return state
}

export default pokemon