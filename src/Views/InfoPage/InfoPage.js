import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toHome: false,
      message: 'Nothing to see here.'
    }
    this.timeout = null;
    this.redirectToHome = this.redirectToHome.bind(this);
  }

  componentDidMount() {
    axios.get('https://in-session.house.gov')
    .then(response => {
      let message = '';
      const { data } = response;
      if (data === 0){
        message = 'The House is not in session.';
      } else if (data === 1) {
        message = 'The House is in session.';
      }
      this.setState({
        ...this.state,
        message: message
      })
      this.timeout = setTimeout(this.redirectToHome,5000);
    })
    .catch(error => {
      console.error('API call failed',error);
    })
  }

  componentWillUnmount(){
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = null;
  }

  redirectToHome() {
    this.setState({
      ...this.state,
      toHome: true
    })
    this.timeout = null;
  }

  render() {
    if (this.state.toHome) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <p>
          Info View
        </p>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default InfoPage;
