import React, { Component } from 'react';
import Pilot from '../Pilot/Pilot';
export default class Vehicle extends Component {

  componentDidMount() {

  }


  render() {
    return (
      <div className="vehicle-info">
        <h2>{this.props.vehicle.name}</h2>
        {this.renderPilots(this.props.vehicle)}
      </div>
    )
  }

  renderPilots(vehicle) {
    if (vehicle.pilots[0] === undefined) {
      return <p>Pilots unknown</p>;
    } else {
      return (
      <div>
        <h3>Piloted by:</h3>
        <p>
        <ul className="pilot-list">
          {vehicle.pilots.map(pilot => {
            return (
              <li key={pilot.match(/\d+/)}><Pilot url={pilot} /></li>
            );
          })}
        </ul>
        </p>
      </div>
      );
    }
  }
}