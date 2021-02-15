
import { combineReducers } from "redux";

import pokemonReduser from "./pizzas"
import pokemonCartReduser from "./cart"

const rootReduser = combineReducers({

    pokemon: pokemonReduser,
    pokemonCart: pokemonCartReduser
})

export default rootReduser
