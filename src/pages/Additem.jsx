import React, { Component } from 'react';


class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      buyItems: ["milk", "bread", "fruit"],
      message: ""
    };
  }

  
// add order name in the list array 
  addItem(item) {
    const { buyItems } = this.state;
    const newItem = item;
    const isOnTheList = buyItems.includes(newItem);
    if (isOnTheList) {
      this.setState({
        message: "This item is already on the list."
      });
    } else {
      newItem !== "" &&
        this.setState({
          buyItems: [...this.state.buyItems, newItem],
          message: ""
        });
    }

    // this.addForm.reset();
  }

// remove order name from the list array 
  removeItem(item) {
    const newBuyItems = this.state.buyItems.filter(buyItems => {
      return buyItems !== item;
    });
    this.setState({
      buyItems: [...newBuyItems]
    });
  }


  render() {
    const { buyItems, message } = this.state;
    return (
      <div className="container">
        <button type="button" onClick={e => this.addItem("momo")}>
          Momo
        </button>
        <button type="button" onClick={e => this.addItem("chowmin")}>
          Chowmin
        </button>

        <div>
          <h1>{this.state.text}</h1>
        </div>

        {message !== "" && <p className="message text-danger">{message}</p>}
        <div className="col-md-6 col-lg-3 ">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {buyItems.map(item => {
                return (
                  <tr key={item}>
                    <th scope="row">1</th>
                    <td>{item}</td>
                    <td className="text-middle">
                      <button
                        onClick={e => this.removeItem(item)}
                        type="button"
                        className="btn btn-default btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
