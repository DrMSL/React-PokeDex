import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/navbar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import PokeSearch from './components/pokemon/PokeSearch';
import Teams from './components/Teams';
import TeamPage from './components/TeamPage';
import backgroundImage from './pattern2.png'


function App() {
  return (
    <Router>
    <div className="App" style={{background: `url(${backgroundImage})`}}>
      <header className="App-header">
      
     
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
      </div>

      <Route  path="/pokesearch" component={PokeSearch} />
     
     <div className="container">
     <Switch>
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/teams/:id" component={TeamPage} />
        </Switch>
     </div>
      </header>
    </div>
    </Router>
  );
}

export default App;
