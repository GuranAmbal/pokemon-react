import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from "axios"


function PokemonBlock({ name, url }) {
 var pockemonNamber= url.toString().split('/')[6];
 var url = "https://pokeres.bastionbot.org/images/pokemon/"+pockemonNamber+".png"
 const sortRef = React.useRef(null);
 const dispatch = useDispatch();
 
 const handeleClick = (e) => {
 
  if (!e.path.includes(sortRef.current)) {
    
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pockemonNamber}/`).then(({ data }) => {
        console.log(data)
       

        //setPizzas(data.pizzas)
      })
  }
};
 React.useEffect(() => {
  document.body.addEventListener('click', handeleClick);
}, []);
  
 

 
  return (
    <Link to={`/cart/${pockemonNamber}`} ref={sortRef} >
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
