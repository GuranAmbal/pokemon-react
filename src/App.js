
import React from "react";
import axios from "axios"

import { Route } from "react-router";
import { Home, Cart } from "./pages";
import { useDispatch } from 'react-redux';
import { setPokemon } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(({ data }) => {

      dispatch(setPokemon(data))

      //setPizzas(data.pizzas)
    })

  }, [])
  return (
    <div className="wrapper">

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}
export default App
