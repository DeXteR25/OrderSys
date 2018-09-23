import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      buyItems: ['milk','bread','fruit'],
      message: '',
    };
  }

  onClickButton1 = () => {
    this.setState({
      text: 'clicked 1'
    });
  }

  onClickButton2 = () => {
    this.setState({
      text: 'clicked 2'
    });
  }

  addItem(e){
    e.preventDefault();
    const {buyItems} = this.state;
    const newItem = this.newItem.value;
    const isOnTheList = buyItems.includes(newItem);
    if (isOnTheList){
      this.setState({
        message : 'This item is already on the list.'
      })

    } else{
      newItem !== '' && this.setState({
        buyItems: [...this.state.buyItems, newItem],
        message : ''
      })
    }

    
    this.addForm.reset();
  }
  removeItem(item){
    const newBuyItems = this.state.buyItems.filter(buyItems => {
      return buyItems !== item;
    });
    this.setState({
      buyItems: [...newBuyItems]
    })
  }
  render() {
    const {buyItems, message } =this.state;
    return (

     <div className="container">
       <form ref={input => this.addForm = input } className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
         <div className="form-group">
           <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
           <input ref={input => this.newItem = input } type="text" placeholder="bread" className="form-control" id="newItemInput" />           
         </div>
         <button type="submit" className="btn btn-primary">Add</button>
       </form>

       <div>
        <button onClick={this.onClickButton1}>
          Button 1
        </button>
        <button onClick={this.onClickButton2}>
          Button 2
        </button>
        <h1>{this.state.text}</h1>
      </div>

       {
         message !== '' && <p className="message text-danger">{message}</p>
       }
       <div class="col-md-6 col-lg-3 ">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                buyItems.map(item => {
                  return(
                    <tr key={item}>
                    <th scope="row">1</th>
                    <td>{item}</td>
                    <td className="text-middle">
                      <button onClick={(e)=> this.removeItem(item)} type="button" className="btn btn-default btn-sm">
                        Remove
                      </button>
                    </td>
                    </tr>
                  ) 
                })
              }
              
            
            </tbody>
        </table>
      </div>
     
     </div>
    );
  }
}

export default App;
