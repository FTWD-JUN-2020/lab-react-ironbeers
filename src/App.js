import React, { Component } from 'react';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/beers/:beerId"
            render={(props) => <SingleBeer {...props} />}
          />
          <Route exact path="/beers" render={() => <Beers />} />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render={() => <NewBeer />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
