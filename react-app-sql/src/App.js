import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    passengers: []
  }

  componentDidMount(){
    this.fetchPassenger();
  }

  fetchPassenger = _ => {
    fetch('http://localhost:4000/passenger')
    .then(response=> response.json())
    .then(({data}) => {
        // console.log(data)
        this.setState({
          passengers : data
        })
      })
    .catch(err => console.log(err));
  }


  // renderEmployee = ({PassengerID, PassengerName, PassengerAge}) => <div key={PassengerID}>{PassengerName}</div>

  render() {
    const { passengers } = this.state;
    return (
      <div className="App">
        {passengers.map(passenger => {
            return (
              <div>
                  First Name: {passenger.PassengerName}
                  Age: {passenger.PassengerAge}
              </div>
            )
        })}
      </div>
    );
  }
}

export default App;
