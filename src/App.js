import Navbar from './Navbar';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/pokedex">
              <Pokedex/>
            </Route>
            <Route path="/pokemon/:id">
              <Pokemon/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;