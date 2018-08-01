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
    this.changeVehicles = this.changeVehicles.bind(this);
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
          previous: data.previous,
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

  changeVehicles = attr => {
    return (e) => {
      console.log(attr,this.state[attr]);
      this.setState({
        ...this.state,
        current: this.state[attr]
      })
      this.updateVehicles(this.state[attr]);
    }
  }

  handleClick(e){

  }

  render() {
    console.log(this.state.vehicles);
    return (
      <div>
        <div className="vehicle-nav">
          <button disabled={this.state.previous ? false : true} url={this.state.previous} onClick={this.changeVehicles("previous")}>Prev</button>
          <button disabled={this.state.next ? false : true} url={this.state.next} onClick={this.changeVehicles("next")}>Next</button>
        </div>
        <ul className="vehicle-list">
          {this.renderVehicles()}
        </ul>
      </div>
    );
  }
}

export default Vehicles;