import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

import {  PokemonBlock } from '../components';



function Home() {
  const dispatch = useDispatch();
  const items  = useSelector(({ pokemon }) => pokemon.items);
 
  return (
    <div className="container">
      
      <h2 className="content__title">Все покемоны</h2>
      <div className="content__items">
        {items && items.map((obj) => (
          <PokemonBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
