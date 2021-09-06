import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Poke React</h1>
      <Link to="pokedex">Go to Pokedex</Link> to discover the pokemon world!
    </div>
  );
}
 
export default Home;