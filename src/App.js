import React, { Component } from 'react';
import './App.css';

import Welcome from './components/Welcome'
import DataComponent from './components/dataCollection/dataCollection'

import { connect } from 'react-redux'
import { GetCalories} from './redux/action'

class App extends Component {
  render() {
    return (
     <div className="container">
      <DataComponent />
     </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    calories: state.calories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCalories: apiInformation => dispatch(GetCalories(apiInformation))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
