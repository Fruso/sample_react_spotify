import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import ListDB from './components/listDB';
import Home from './components/home';
import Search from './components/search';
import Detail from './components/detail';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//<Redirect from="*" to={"/Home"} />
function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/search'} className="nav-link"> Search </Link></li>
            <li><Link to={'/ListDB'} className="nav-link">ListDB Mongo</Link></li>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/Home' component={Home} />
              <Route exact path='/Search' component={Search} />
              <Route path='/ListDB' component={ListDB} />
              <Route path='/Detail/:id' component={Detail} />
              
          </Switch>
        </div>
      </Router>    
    </div>
  );
}

export default App;
