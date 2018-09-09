import React, { Component } from 'react';
import './Menu.css';


class Menu extends Component {
    render(){
      
        
        return(
            
                <div className="container">
                    <nav className="navbar navbar-light bg-light">
                        <button type="button" className="btn">Back</button>
                        <h1>Orders List</h1>
                        <p></p>
                    </nav>
                    <div className="row">
                                <div className="container panelBody">
                                        <input type="text" id="inputData" className="inputCss form-control" />
                                        
                                    <div className="rowPad">
                                        <button className="btn  btn-lg" onClick="getData('Mo:Mo')" >Mo:Mo</button>
                                        <button className="btn  btn-lg" onClick="getData('Chowmin')">Chowmin</button>
                                        <button className="btn  btn-lg" onClick="getData('Burger')">Burger</button>
                                        <button className="btn  btn-lg" onClick="getData('Cola')">Cola</button>
                                        <button className="btn  btn-lg" onClick="getData('pepsi')">Pepsi</button>
                                    </div>
                                   
                                   
                                   
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

export default Menu 

