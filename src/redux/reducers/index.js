
import { combineReducers } from "redux";

import pokemonReduser from "./pizzas"

const rootReduser = combineReducers({

    pokemon: pokemonReduser
})

export default rootReduser
