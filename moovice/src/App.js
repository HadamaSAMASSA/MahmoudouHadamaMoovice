import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Popular from './components/Popular';
import PopularBattle from './components/Popular-battle';
import Weekly from './components/Weekly';
import WeeklyBattle from './components/Weekly-battle';
import Favorites from './components/Favorites';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return (

      <BrowserRouter>
        
          <nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                <h1>Moovice</h1>
                <Link to="/Home"><p>Home</p></Link>
                <Link to="/Weekly"><p>Weekly</p></Link>
                <Link to="/Weekly-battle"><p>WeeklyBattle</p></Link>
                <Link to="/Popular"><p>Popular</p></Link>
                <Link to="/Popular-battle "><p>PopularBattle</p></Link>
                <Link to="/Favorites"><p>Favorites</p></Link>
              </div>
            </nav>
          </nav>

          <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/Weekly" component={Weekly} />
            <Route path="/Weekly-battle" component={WeeklyBattle} />
            <Route path="/Popular" component={Popular} />
            <Route path="/Popular-battle " component={PopularBattle} />
            <Route path="/Favorites" component={Favorites} />
          </Switch>
        
      </BrowserRouter>

    );
  }

}

export default App;
