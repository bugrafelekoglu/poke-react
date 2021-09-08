import { useParams } from "react-router-dom";
import PokemonDetail from '../components/pokemon/PokemonDetail'

const Pokemon = () => {
  const { id } = useParams();
  
  return (
    <div className="pokemon-detail-page">
      <h1>Pokemon Details</h1>
      <PokemonDetail pokeId={id}/>
    </div>
  );
}
 
export default Pokemon;