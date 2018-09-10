import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
class App extends Component {
  render() {
    return (
      
      <Router>
      <div>
        <Route  path= "/Home" component={Home} exact/>
        <Route  path= "/Menu" component={Menu} exact/>
      </div>
    </Router>
    
    );
  }
}

export default App;
