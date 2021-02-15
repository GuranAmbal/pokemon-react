const initialState = {
    name: "",
    height: "",
    weight: "",
    id: "",
    isLoaded: false
}

const pokemon = (state = initialState, action) => {

    if (action.type == "SET_CART_POKEMON") {
        return {
            ...state,
            name: action.payload.name,
            height: action.payload.height,
            weight: action.payload.weight,
            id: action.payload.id,

        }

    }
    return state
}

export default pokemon