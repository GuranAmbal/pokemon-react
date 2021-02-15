import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

function Cart() {
  const pokemonName  = useSelector(({ pokemonCart }) => pokemonCart.name);
  const pokemonId  = useSelector(({ pokemonCart }) => pokemonCart.id);

  var url = "https://pokeres.bastionbot.org/images/pokemon/"+pokemonId+".png"
  return (
    <div>
      <h1>Карточка покемона</h1>
      <div className="pizza-block">
      <img className="pizza-block__image" src={url} alt="Pockemon" />
      <h4 className="pizza-block__title">{pokemonName}</h4>
      </div>
    </div>
  );
}

export default Cart;
