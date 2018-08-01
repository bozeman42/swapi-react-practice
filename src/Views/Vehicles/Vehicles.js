import React, { Component } from 'react';
import axios from 'axios';
import Vehicle from '../../components/Vehicle/Vehicle';
import './Vehicles.css';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      next: null,
      prev: null,
      current: 'https://swapi.co/api/vehicles',
      toHome: false
    }
  }

  componentDidMount() {
    this.updateVehicles(this.state.current);
  }

  updateVehicles(url) {
    axios.get(url)
      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({
          ...this.state,
          next: data.next,
          prev: data.prev,
          current: url,
          vehicles: data.results
        })
      })
      .catch(error => {
        console.error(error);
      })
  }

  renderVehicles() {
    return this.state.vehicles.map(vehicle => {
      return <li key={vehicle.url.match(/\d+/)}><Vehicle vehicle={vehicle} /></li>
    })
  }

  // changeVehicles(attr) {
  //   return function (e) {
  //     if (attr === "Prev") {
        
  //     }
  //   }
  // }

  render() {
    console.log(this.state.vehicles);
    return (
      <div>
        {/* <div className="vehicle-nav">
          <button disabled={this.state.prev ? false : true} url={this.state.prev} onClick={this.changeVehicles("Prev")}>Prev</button>
          <button disabled={this.state.next ? false : true} url={this.state.next} onClick={this.changeVehicles("Next")}>Next</button>
        </div> */}
        <ul className="vehicle-list">
          {this.renderVehicles()}
        </ul>
      </div>
    );
  }
}

export default Vehicles;