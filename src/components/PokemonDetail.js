import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getPokemonData } from '../services/api'

const PokemonDetail = () => {
  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
    setLoading(true)
    getPokemonData(id)
      .then(data => {
        setPokemonData(data)
        console.log(data);
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  return (
    <div className="pokemon-detail-page">
      {pokemonData.name} ({id}) detail page 
    </div>
  )
}
 
export default PokemonDetail