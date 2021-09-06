import _ from 'lodash'
import { getPokemonList } from '../services/api'
import { useState, useEffect } from 'react'
import PokemonGridButton from './PokemonGridButton'

const PokemonGrid = () => {

  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
    setLoading(true)
    getPokemonList()
      .then(response => {
        setPokemonList(response.results)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="pokemon-grid-container">
      {
        loading ? <span>Loading...</span> : 
        (
          error ? 
            <span className="error-text" style={{padding: '12px 2px'}}>
              Pokemon list data not reachable!
            </span>
          :
          (
            _.isEmpty(pokemonList) ? 
              <span>Pokemon list is empty!</span>
            :
            _.map(pokemonList, (data, index) => {
              return <PokemonGridButton key={index} pokeData={data}/>
            })
          )
        )
      }
    </div>
  )
}
 
export default PokemonGrid