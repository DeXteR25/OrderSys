import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom';
// const data = ''
class Menu extends Component {

    constructor(props) {
    super(props);
    this.state = {isToggleOn: true, data:''};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn,
//       data: state.name
//     }));
//     console.log(data);
//   }
handleClick(event){
    // console.log(event.target.value)
    this.setState({
           
        data: event.target.value
    });
}



    render(){
      
        
        return(
              
                <div className="container">
                    <nav className="navbar navbar-light bg-light">
                    <Link className=" btn" to="/Home" >Back</Link>
                        <h1>Orders List</h1>
                        <p></p>
                    </nav>
                    <Router>
                    <div>
                    <Route  path= "/" render={ () => { return ("Hello");}}/>
                    </div>
                    </Router>
                    <div className="row">
                                <div className="container panelBody">
                                        <input type="text" id="inputData" className="inputCss form-control" />
                                       {/* here value come after clicking  */}
                                        {this.state.data}  


                                    <div className="rowPad">
                                        <button className="btn  btn-lg" onClick="getData('Mo:Mo')" >Mo:Mo</button>
                                        <button className="btn  btn-lg" onClick="getData('Chowmin')">Chowmin</button>
                                        <button className="btn  btn-lg" onClick="getData('Burger')">Burger</button>
                                        <button className="btn  btn-lg" onClick="getData('Cola')">Cola</button>
                                        <button className="btn  btn-lg" onClick="getData('pepsi')">Pepsi</button>
                                    </div>
                                   
                                   {/* When button clicks it render data from button.value using event */}
                                    <button  value="momo" onClick={this.handleClick}>
     momo
      </button>
                                   
                                    <div class="rowPad">
                                        <button tyepe="submit" className="btn btn-info" onclick="inputValidation()">result</button>
                                        <button className="btn btn-info" onclick="clearAll()">clear all</button>
                                    </div>
                            </div>
                                    
                    </div>
                         
                </div> 
                
           
        );
    }
}

export default Menu;
