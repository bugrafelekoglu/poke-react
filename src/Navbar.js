import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="navbar-title">
        <h1>Poke React</h1>
      </NavLink>
      <div className="links">
        <NavLink exact to="/" activeClassName="active-nav">
          Home
        </NavLink>
        <NavLink to="/pokedex" activeClassName="active-nav">
          PokeDex
        </NavLink>
      </div>
    </nav>
  );
}
 
export default Navbar;