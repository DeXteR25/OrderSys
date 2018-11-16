import React, { Component } from 'react';
import './Home.css';
import { Link} from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
 this.state = {
      
      // array lai list ma change garda qty ko use garna milxa
      buyItems: [],
      qty: 0,
      redirect: false,
    };
    
  }
  
  addItem(item,) {
    const { buyItems } = this.state;
    const newItem = item;
     //list ma array jasari include rakhna namilne vayera some use gareko xa
     // some le pani include jastai list ma same value xa vane TRUE return garxa
    const isOnTheList = buyItems.some(e => e.name === newItem);

    if (isOnTheList) {
      //pahile ko element haru addBuyItems ma sareko  
      const addBuyItems = this.state.buyItems;
     // jun repeated element xa tyo matrai changeItem ma sareko 
      const changeItem = this.state.buyItems.filter(buyItems => {
        return buyItems.name === item;
        //yesko value [o:object-name="coke",qty=1] hunxa
        //yesko return jahile pani 1 matrai hunxa cus filter bata same value eutai matrai niskinxa
      });
      changeItem[0].qty++; // always [0] cus yesko object 0 position ma matrai hunxa 
                           // ++ le 1 le increase garxa
      
      this.setState({
        // [...] le sabai change vayeko addBuyItems haru buyItems ma update garxa
        buyItems: [...addBuyItems]
      });
    } else {
      newItem !== "" &&
        this.setState({
          buyItems: [...this.state.buyItems, { name: item, qty: 1 }],
          message: ""
        });
    }
  }
  lessItem(item,) {
    const { buyItems } = this.state;
    const newItem = item;

   
     //list ma array jasari include rakhna namilne vayera some use gareko xa
     // some le pani include jastai list ma same value xa vane TRUE return garxa
    const isOnTheList = buyItems.some(e => e.name === newItem);

    if (isOnTheList) {
      //pahile ko element haru addBuyItems ma sareko  
      const addBuyItems = this.state.buyItems;
     // jun repeated element xa tyo matrai changeItem ma sareko 
      const changeItem = this.state.buyItems.filter(buyItems => {
        return buyItems.name === item;
        //yesko value [o:object-name="coke",qty=1] hunxa
        //yesko return jahile pani 1 matrai hunxa cus filter bata same value eutai matrai niskinxa
      });
      changeItem[0].qty--; // always [0] cus yesko object 0 position ma matrai hunxa 
                           // ++ le 1 le increase garxa
      
      this.setState({
        // [...] le sabai change vayeko addBuyItems haru buyItems ma update garxa
        buyItems: [...addBuyItems]
      });
    } else {
      newItem !== "" &&
        this.setState({
          buyItems: [...this.state.buyItems, { name: item, qty: 1 }],
          message: ""
        });
    }

  }

  removeItem(item) {
    const newBuyItems = this.state.buyItems.filter(buyItems => {
      return buyItems.name !== item; // [!==] le tyo bata nabayeko sabai filter vayera baki rahanxa 
    });
    this.setState({
      buyItems: [...newBuyItems]
    });
  }

  editItem(item) {
    const newBuyItems = this.state.buyItems.filter(buyItems => {
      return buyItems.name !== item; // [!==] le tyo bata nabayeko sabai filter vayera baki rahanxa 
    });
    this.setState({
      buyItems: [...newBuyItems]
    });
  }
  confirmMenu() {
    const fs = require("fs");
    var jsonString = JSON.stringify(this.state.buyItems);
    console.log(jsonString);
    alert(jsonString);
  }
render () {
        const { buyItems, message } = this.state;
        
        return (
           
            <div id ="bg">
                    <div className="container">{ /*this is for format */}
                        <h1 className='font'>TABLE</h1>

                                <div className="d-flex justify-content-between p-2 ">
                                
                                         <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table1</button>
                                         <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table2</button>
                                         <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table3</button>
                                </div>

                                <div className="d-flex justify-content-between p-2 ">
                                
                                          <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table4</button>
                                         <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table5</button>
                                         <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table6</button>

                                </div>

                                <div className="d-flex justify-content-between p-2 ">
                                
                                <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table7</button>
                                         <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table8</button>
                                         <button className="p-2 btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter" >Table9</button>
                                </div>
                                
                                <Link className=" btn btn-success btn-lg"  to={"/Cook"}>Done</Link>
                      
                                       {/* <!-- Modal --> */}
                                       <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                             <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                  <div className="modal-header">
                                                     <h5 className="modal-title" id="exampleModalLongTitle">MENU</h5>
                                                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                          <span aria-hidden="true">&times;</span>
                                                          </button>
                                                        </div>

                      <div className="modal-body ">
                      <div className="col-md-12 ">
                      <div className="container panelBody">
                      <div className="orderView" type="text" id="inputData">
                          <table className="table">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Item</th>
                                  <th>Qty</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                                <tbody>
                                  {buyItems.map(item => {
                                    return (
                                      <tr key={buyItems.indexOf(item.name)}>
                                        <th scope="row">{buyItems.indexOf(item) + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.qty}</td>
                                        <td className="text-middle">

                                         <button type="button" className="btn btn-primary" 
                                           onClick={e => this.addItem(item.name)}>
                                            Add
                                            </button>

                                          <button
                                            onClick={e => this.removeItem(item.name)}
                                            type="button"
                                            className="btn btn-default btn-sm">
                                            Remove
                                          </button>

                                           <button type="button" className="btn btn-primary" 
                                           onClick={e => this.lessItem(item.name)}>
                                            Less
                                            </button>
                   
                                        </td>
                                      </tr> 
                                    );
                                  })}
                                </tbody>
                          </table>
                    
                    </div>
                       

                  <div className="column rowPad">
                    <button type="button" className="btn btn-primary" onClick={e => this.addItem("coke")}>
                      Coke
                    </button>
                    <button type="button" className="btn btn-primary" onClick={e => this.addItem("Tea")}>
                      Tea
                    </button>
                    <button type="button" className="btn btn-primary" onClick={e => this.addItem("Mo:Mo")}>
                      Mo:Mo
                    </button>
                    <button type="button" className="btn btn-primary" onClick={e => this.addItem("Pizza")}>
                      Pizza
                    </button>
                    <button type="button" className="btn btn-primary" onClick={e => this.addItem("P.Fry")}>
                      P.Fry
                    </button>
                    <button type="button" className="btn btn-primary" onClick={e => this.addItem("Coffee")}>
                      Coffee
                    </button>
                   
                              </div>
                    <div>
                      <h1>{this.state.text}</h1>
                    </div>

                    {message !== "" && <p className="message text-danger">{message}</p>}

                    {/* <!-- Button trigger modal --> */}
                             <button type="submit" data-toggle="modal" data-target="#exampleModalCenter" className="btn btn-info" onClick={e => this.confirmMenu()}>
                             Confirm
                            </button>
                            
                            <button type="button" className="btn btn-primary" onClick={this.onNavigateCook}>
                     Cook
                    </button>
                  
                          </div>                        
                          </div>
                    </div>    
                    </div>
                    </div>
                                 
                   
                    </div> 
                </div>     
            </div>
             
          
                    
                 
        );
    }
}

export default Home
