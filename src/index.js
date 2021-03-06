import 'es6-shim'; // yeah, polyfill all the things !!!
import 'whatwg-fetch'; // yeah, polyfill all the things !!!
import Symbol from 'es-symbol';
import React from 'react';
import ReactDOM from 'react-dom';
import { WineApp, WineList } from './components';
import './index.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import RegionsPage from './components/RegionsPage'
import WineListPage from './components/WineListPage'
import WinePage from './components/WinePage'
import NotFound from './components/NotFound'
import {Component} from 'react'


if (!window.Symbol) {
  window.Symbol = Symbol; // yeah, polyfill all the things !!!
}

class RoutedApp extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="container">
            <Route path="/" component={WineApp} />
            <div className="row">
              <Route exact path="/" component={RegionsPage} />
              <Route exact path="/regions/:regionId" component={WineListPage}/>
              <Route exact path="/regions/:regionId/wines/:wineId" component={WinePage} />
              {/* <Route path="*" component={NotFound} /> */}
            {/* <Redirect to="/404" /> */}
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
