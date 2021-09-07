import { useState, useEffect } from 'react'
import { getPokemonData } from '../services/api'

const PokemonDetail = (props) => {
  const id = props.pokeId
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
    <div className="pokemon-detail">
      <div>{loading && 'loading...'}</div>
      <div>{error && 'error!'}</div>
      {!(loading || error) && <div>{pokemonData.name} ({id}) detail page </div>}
    </div>
  )
}
 
export default PokemonDetail