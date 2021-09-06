export function getPokemonList(limit = 0, offset = 0) {
  const checkedLimit = isNaturalNumber(limit) ? limit : 0
  const checkedOffset = isNaturalNumber(offset) ? offset : 0
  const link = `https://pokeapi.co/api/v2/pokemon/?limit=${checkedLimit}&offset=${checkedOffset}`
  return fetch(link).then(res => res.json())
}

export function getPokemonData(id) {
  const link = `https://pokeapi.co/api/v2/pokemon/${id}`
  return fetch(link).then(res => res.json())
}

function isNaturalNumber (str) {
  const pattern = /^(0|([1-9]\d*))$/;
  return pattern.test(str);
}