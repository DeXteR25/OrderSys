import React, { Component } from 'react';
import './Cook.css';
const numbers = [1, 2, 3, 4, 5];
const foods= ['momo', 'tea'];
const quantity= [4,3];
            const listNum= numbers.map((numbers) =>
            <tr>{numbers}</tr>
            );
            const listFood= foods.map((foods) =>
            <tr>{foods}</tr>
            );
            const listQuantity= quantity.map((quantity) =>
            <tr>{quantity}</tr>
            );
        
class Cook extends Component {
    render(){
        return(            
                <div class="container">
                <nav class="navbar ">
                     <p></p>
                     <h1>Orders List</h1>
                     <p></p>
                </nav>
                    <div class="row">
                        <div class="col-md-6 col-lg-3 ">
                            <br></br>
                            <div class="card1">
                             <h4>Table 1</h4>
                                <table class="table table-bordered">
                                    <thead class="thead-light">
                                    <tr>
                                        <th>SN</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{listNum}</td>
                                        <td>{listFood}</td>
                                        <td>{listQuantity}</td>
                                    </tr>
                                   
                                    
                                    </tbody>
                                 </table>
                                 
                            <button type="button" class="btn btn-success">Done</button>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 ">
                            <br></br>
                            <div class="card1">
                             <h4>Table 1</h4>
                                <table class="table table-bordered">
                                    <thead class="thead-light">
                                    <tr>
                                        <th>SN</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{listNum}</td>
                                        <td>{listFood}</td>
                                        <td>{listQuantity}</td>
                                    </tr>
                                   
                                    
                                    </tbody>
                                 </table>
                                 
                                <button type="button" class="btn btn-success">Done</button>
                            </div>
                        </div>
                       </div>
                           
                </div> 
           
        );
    }
}

export default Cook