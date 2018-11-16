import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Main from './pages/Main';
import Cook from './pages/Cook';
import Menuadd from './pages/Menuadd';
import AddItem from './pages/AddItem';
import AddTable from './pages/AddTable';
import Add from './pages/Add';
class App extends Component {
  render() {
    return (
      
      <Router>
          <div>
            <Route  path= "/Main" component={Main} exact/>
            <Route  path= "/" component={Home} exact/>
            <Route  path= "/Menu" component={Menu} exact/>
            <Route  path= "/Cook" component={Cook} exact/>
            <Route  path= "/Menuadd" component={Menuadd} exact/>
            <Route  path= "/AddItem" component={AddItem} exact/>
            <Route  path= "/AddTable" component={AddTable} exact/>
            <Route  path= "/Add" component={Add} exact/>
          </div>
    </Router>
    
    );
  }
}

export default App;

