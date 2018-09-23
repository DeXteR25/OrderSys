import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom';

// const data = ''
class Menu extends Component {

    constructor(props) {
    super(props);
    this.state = {isToggleOn: true, data:'', clicks: 0, value: 0};
   

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

    this.setState((prevState) => ({
        clicks: prevState.clicks + 1
   }));

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
                       
                    </nav>
                    <Router>
                    <div>
                    <Route  path= "/" render={ () => { return ("");}}/>
                    </div>
                    </Router>
                    <div className="row">
                                <div className="container panelBody"  >
                                        <div className="orderView" type="text" id="inputData">
                                       
                                        {this.state.data}  
                                        {this.state.clicks}
                                </div>

                                    <div className="rowPad">

                                  
                                        <button className="btn  btn-lg" onClick={this.handleClick.bind(this)} value="Mo:Mo"> MO:MO</button>
                                        <button className="btn  btn-lg" onClick={this.handleClick.bind(this)} value="Chowmin" >CHOWMIN</button>
                                        <button className="btn  btn-lg" onClick={this.handleClick.bind(this)} value="Burger" >BURGER</button>
                                        <button className="btn  btn-lg" onClick={this.handleClick.bind(this)} value="Cola" >COLA</button>
                                        <button className="btn  btn-lg" onClick={this.handleClick.bind(this)} value="Pepsi" >PEPSI</button>
                                    </div>
                                   
                                   {/* When button clicks it render data from button.value using event */}
                                    
                                   
                                    <div class="rowPad">
                                        <button type="submit" className="btn btn-info" onclick={this.value}>result</button>
                                       
                                       
                                    </div>

                                        
                            </div>
                                    
                    </div>
                         
                </div> 
                
           
        );
    }
}

export default Menu;
