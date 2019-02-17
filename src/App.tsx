import React, { Component, FunctionComponent } from 'react';
import { HashRouter, Switch, Route, match } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

const Detail: FunctionComponent<{ match: match<{ id: string }> }> = ({ match }) => (
  <>{match.params.id}</>
);

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div className="routingArea">
            <Switch>
              <Route exact path="/" component={() => <>Top!</>} />
              <Route path="/detail/:id" component={Detail} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
