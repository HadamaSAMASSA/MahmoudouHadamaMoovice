import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Popular from './components/Popular';

class App extends React.Component {

  render() {
    return (


      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li> <Link to="/"><h1>Home</h1></Link></li>
              <li><Link to="/weekly"><h1>Weekly</h1></Link></li>
              <li><Link to="/weekly-battle"><h1>WeklyBattle</h1></Link></li>
              <li><Link to="/popular"><h1>Popular</h1></Link></li>
              <li><Link to="/popular-battle "><h1>PopularBattle</h1></Link></li>
              <li><Link to="/favorites"><h1>Favorites</h1></Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" component={App} />
            <Route path="/weekly" component={App} />
            <Route path="/weekly-battle" component={App} />
            <Route path="/popular" component={App} />
            <Route path="/popular-battle " component={App} />
            <Route path="/favorites" component={App} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }

}

export default App;
