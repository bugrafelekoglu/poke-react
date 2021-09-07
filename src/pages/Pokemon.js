import { useParams } from "react-router-dom";
import PokemonDetail from '../components/PokemonDetail'

const Pokemon = () => {
  const { id } = useParams();
  
  return (
    <div className="pokemon-detail-page">
      <h1>Pokemon</h1>
      <PokemonDetail pokeId={id}/>
    </div>
  );
}
 
export default Pokemon;