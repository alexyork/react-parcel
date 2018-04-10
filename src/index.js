import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Usage from './components/pages/Usage';

import "./styles/style.scss";

const App = () => (
  <Router>
    <div>
      <Header />

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/usage" component={Usage}/>

      <Footer />
    </div>
  </Router>
)
var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
