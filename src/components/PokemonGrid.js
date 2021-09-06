import _ from 'lodash'
import { getPokemonList } from '../services/api'
import { useState, useEffect } from 'react'
import PokemonGridButton from './PokemonGridButton'

const PokemonGrid = () => {

  const [pokemonList, setPokemonList] = useState([])
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const limitOptions = [20, 40, 80, 160, 'All']

  useEffect(() => {
    console.log(limit, 'bugra');
    setError(false)
    setLoading(true)
    getPokemonList(limit, offset)
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
  }, [limit, offset])

  return (
    <div>
      {loading && <span>Loading...</span>}
      {error && 
        <span className="error-text" style={{padding: '12px 2px'}}>
          Pokemon list data not reachable!
        </span>
      }
      {!(loading || error) && 
        (
          _.isEmpty(pokemonList) ? 
            <span>Pokemon list is empty!</span>
          :
          (
            <div className="pokemon-grid">
              <select value={limit} onChange={(e) => {setLimit(e.target.value)}}>
                {
                  _.map(limitOptions, (opt, index) => {
                    return <option key={index} value={_.isNumber(opt) ? opt : 99999}>{opt}</option>
                  })
                }
              </select>
              <div className="pokemon-grid-container">
                {
                  _.map(pokemonList, (data, index) => {
                    return <PokemonGridButton key={index} pokeData={data}/>
                  })
                }
              </div>
            </div>
          )
        )
      }
    </div>
  )
}
 
export default PokemonGrid