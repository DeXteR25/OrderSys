import React, { Component } from 'react';

import './Home.css';

class home extends Component {
    render () {
        return (
            <div id ="bg">
                    <div className="container">{ /*this is for format */}
                        <h1 className='font'>TABLE</h1>

                                <div className="d-flex justify-content-center">
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table1</a></div>
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table2</a></div>
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table3</a></div>
                                    
                                </div>
                                
                                <div className="d-flex justify-content-center">
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table4</a></div>
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table5</a></div>
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table6</a></div>
                                    
                                </div>

                                 <div className="d-flex justify-content-center">
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table7</a></div>
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table8</a></div>
                                    <div className="p-2"><a className="btn btn-primary btn-lg" href="" role="button">Table9</a></div>
                                    
                                </div>
            
                    </div>

            </div>
                    
                 
        );
    }
}

export default home