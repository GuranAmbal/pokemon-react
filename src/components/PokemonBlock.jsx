import React from 'react';
import axios from "axios"

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPokemonCart } from '../redux/actions/cart'


function PokemonBlock({ name, url }) {
 var pockemonNamber= url.toString().split('/')[6];
 var url = "https://pokeres.bastionbot.org/images/pokemon/"+pockemonNamber+".png"
 
 const dispatch = useDispatch();
 
 const handleClick = (e) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pockemonNamber}/`).then(({ data }) => {        
        dispatch(setPokemonCart(data))
    
      })
  
};
 
  
 

 
  return (
    <Link to={`/cart/${pockemonNamber}`} onClick={handleClick} >
    <div className="pizza-block">
      <img className="pizza-block__image" src={url} alt="Pockemon" />
      <h4 className="pizza-block__title">{name}</h4>
      </div>
      </Link>
  );
}
PokemonBlock.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  
};
PokemonBlock.defoultProps = {
  name: '---',
 
};

export default PokemonBlock;
