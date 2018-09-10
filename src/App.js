import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Cook from './pages/Cook';
import Main from './pages/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Router>
            <div>
              <Route exact path="/Cook" component={Cook}/>
              <Route exact path="/Main" component={Main}/>
            </div>
          </Router>       
      </div>
    );
  }
}

export default App;
