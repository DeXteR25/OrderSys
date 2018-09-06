import React, { Component } from 'react';

class Cook extends Component {
    render(){
        return(
        
                <div class="container">
                <nav class="navbar navbar-light bg-light">
                     <button type="button" class="btn">Back</button>
                     <h1>Orders List</h1>
                     <p></p>
                </nav>
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <br></br>
                             <h4>Table 1</h4>
                                <div class="card">
                                <table class="table table-bordered">
                                    <thead class="thead-light">
                                    <tr>
                                        <th>Food Name</th>
                                        <th>Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Momo</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Choumin</td>
                                        <td>3</td>
                                    </tr>
                                    
                                    </tbody>
                                 </table>
                                 <button type="button" class="btn btn-success">Done</button>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                        <br></br>
                             <h4>Table 1</h4>
                                <div class="card">
                                <table class="table table-bordered">
                                    <thead class="thead-light">
                                    <tr>
                                        <th>Food Name</th>
                                        <th>Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Momo</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Choumin</td>
                                        <td>3</td>
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