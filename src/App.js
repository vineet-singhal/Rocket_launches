import { Component } from "react";
import "./App.css";
import {Card} from "./components/card";
import {Modal} from "./components/modal";

class App extends Component {
  constructor(){
    super();

    this.state = {
      flights: []
    }
  }

  componentDidMount(){
    fetch("https://api.spacexdata.com/v3/launches")
    .then(response => response.json())
    .then(flights => this.setState({flights: flights}));
  }

  render(){
    return (
      <div className='container'>
        <div className='row'>
        {this.state.flights.map(flight => (
          <>
          <Card key={flight.mission_name} flight={flight}/>
          <Modal key={`unique1${flight.mission_name}`} flight={flight}/>
          </>
        ))}
        </div>
      </div>    
    );
  }
}

export default App;
