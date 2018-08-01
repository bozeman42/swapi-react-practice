import React, { Component}  from 'react';
import axios from 'axios';

export default class Pilot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  componentDidMount() {
    axios.get(this.props.url)
    .then(response => {
      console.log('pilot response',response.data);
      const { data } = response;
      this.setState({
        ...this.state,
        name: data.name
      })
    })
  }
  

  render() {
    return (
      <span>{this.state.name}</span>
    )
  }
}