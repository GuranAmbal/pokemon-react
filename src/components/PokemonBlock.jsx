import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from "axios"


function PokemonBlock({ name, url }) {
 var pockemonNamber= url.toString().split('/')[6];
 var url = "https://pokeres.bastionbot.org/images/pokemon/"+pockemonNamber+".png"
 
 const dispatch = useDispatch();
 
 const handleClick = (e) => {
  console.log("3")
  
    
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pockemonNamber}/`).then(({ data }) => {
        
       
    console.log(data)
        //setPizzas(data.pizzas)
      })
  
};
 
  
 

 
  return (
    <Link to={`/cart/${pockemonNamber}`} onClick={handleClick} >
    <div className="pizza-block">
      <img className="pizza-block__image" src={url} alt="Pizza" />
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
