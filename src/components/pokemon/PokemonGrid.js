import _ from 'lodash'
import { getPokemonList } from '../../services/api'
import { useState, useEffect } from 'react'
import PokemonGridButton from './PokemonGridButton'
import Pagination from '../Pagination'

const PokemonGrid = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [numOfAllPokemons, setNumOfAllPokemons] = useState(0) 
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
    setLoading(true)
    getPokemonList(limit, offset)
      .then(response => {
        setPokemonList(response.results)
        setNumOfAllPokemons(response.count)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [limit, currentPage, offset])


  const handleLimit = (limit) => {
    setLimit(limit)
    setCurrentPage(1)
    setOffset(0)
  }

  const handlePage = (currentPage) => {
    setCurrentPage(currentPage)
    setOffset((currentPage - 1) * limit)
  }

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
              <div className="pokemon-grid-container">
                {
                  _.map(pokemonList, (data, index) => {
                    return <PokemonGridButton key={index} pokeData={data}/>
                  })
                }
              </div>
              <Pagination 
                numberOfItems={numOfAllPokemons}
                limit={limit} 
                currentPage={currentPage} 
                handleLimit={handleLimit}
                handlePage={handlePage}
              />
            </div>
          )
        )
      }
    </div>
  )
}
 
export default PokemonGrid