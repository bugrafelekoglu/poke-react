import { useState } from "react";
import _ from 'lodash'
import { Link } from 'react-router-dom'

const PokemonGridButton = ({pokeData}) => {
  const { name, url } = pokeData

  const [pokeId] = useState(() => {
    const linkArr = url.split('/')
    return _.get(url.split('/'), linkArr.length - 2)
  });

  const artworkLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
  // const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`

  return ( 
    <Link to={`/pokemon/${pokeId}`} className="pokemon-grid-button">
      <div className="pokemon-img-container">
        <img src={artworkLink} alt={name} />
      </div>
      <div className="pokemon-name-container">
        <span style={{color: 'white'}}>{name}</span>
      </div>
    </Link>
  );
}
 
export default PokemonGridButton;