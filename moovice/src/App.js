import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Popular from './components/Popular';
import PopularBattle from './components/Popular-battle';
import Weekly from './components/Weekly';
import WeeklyBattle from './components/Weekly-battle';
import Favorites from './components/Favorites';

class App extends React.Component {

  render() {
    return (


      <BrowserRouter>
        <div>
          <nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                <h1>Moovice</h1>
                <Link to="/weekly"><p>Weekly</p></Link>
                <Link to="/weekly-battle"><p>WeklyBattle</p></Link>
                <Link to="/popular"><p>Popular</p></Link>
                <Link to="/popular-battle "><p>PopularBattle</p></Link>
                <Link to="/favorites"><p>Favorites</p></Link>
              </div>
            </nav>


         
          </nav>

          <Switch>
            <Route path="/" />
            <Route path="/weekly" component={Weekly} />
            <Route path="/weekly-battle" component={WeeklyBattle} />
            <Route path="/popular" component={Popular} />
            <Route path="/popular-battle " component={PopularBattle} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }

}

export default App;
