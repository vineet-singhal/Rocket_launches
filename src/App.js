import { Component } from "react";
import "./App.css";
import {Card} from "./components/card";
import { Filter } from "./components/filter";
import {Modal} from "./components/modal";

class App extends Component {
  constructor(){
    super();

    this.state = {
      flights: [],
      upcoming: 'both',
      launch: 'both'
    }
  }

  componentDidMount(){
    fetch("https://api.spacexdata.com/v3/launches")
    .then(response => response.json())
    .then(flights => this.setState({flights: flights}));
  }

  upcomingFilter = (e) => {
    if(e.target.value == 'yes'){
      this.setState({upcoming: true});
    }
    else if(e.target.value == 'no'){
      this.setState({upcoming: false});
    }
    else{
      this.setState({upcoming: 'both'});
    }
  }

  launchFilter = (e) => {
    if(e.target.value == 'Failure'){
      this.setState({launch: false});
    }
    else if(e.target.value == 'Success'){
      this.setState({launch: true});
    }
    else{
      this.setState({launch: 'both'});
    }
  }

  render(){
    const filteredFlights = this.state.flights.filter(flight =>
        flight.upcoming == this.state.upcoming || this.state.upcoming == 'both'
      );
    const launchfilteredFlights = filteredFlights.filter(flight =>
        flight.launch_success == this.state.launch || this.state.launch == 'both'
      );
    return (
      <>
      <Filter upcomingFilter={this.upcomingFilter} launchFilter={this.launchFilter}/>
      <div className='container'>
        <h1 className='text-center display-4'>Flight Information</h1>
        <div className='row'>
        {launchfilteredFlights.map(flight => (
          <>
          <Card key={flight.launch_date_unix} flight={flight}/>
          <Modal key={`unique1${flight.launch_date_unix}`} flight={flight}/>
          </>
        ))}
        </div>
      </div>  
      </>  
    );
  }
}

export default App;
