import React, { Component } from 'react';
import Header from '../../components/Header';
import HomePage from '../HomePage/HomePage';
import InfoPage from '../InfoPage/InfoPage';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Vehicles from '../Vehicles/Vehicles';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Route path="/" exact component={HomePage}/>
            <Route path="/info" component={InfoPage}/>
            <Route path="/vehicles" component={Vehicles}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
