import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Cook from './pages/Cook';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Router>
            <div>
              <Route exact path="/" component={Cook}/>
            </div>
          </Router>       
      </div>
    );
  }
}

export default App;
