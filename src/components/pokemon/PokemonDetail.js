import _ from 'lodash'
import { useState, useEffect } from 'react'
import { getPokemonData } from '../../services/api'
import Container from '../Container'

const PokemonDetail = ({ pokeId }) => {
  const id = pokeId
  const [pokemonData, setPokemonData] = useState(null)
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
      {
        !(loading || error) && 
        <div>
          {_.get(pokemonData, 'name')} ({id}) detail page 

          <Container title="test">
            asdasd
          </Container>
        </div>
      }
    </div>
  )
}
 
export default PokemonDetail