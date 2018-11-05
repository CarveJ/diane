import React, { Component } from 'react';
import './App.css';

//importing components
import Welcome from './components/Welcome'
import DataComponent from './components/dataCollection/dataCollection'
import ComposedComponent from './components/dataCollection/HOC'
import dataScreenArr from './dataScreensArr/dataScreensArr'
import ShowData from './components/ShowData'

//importing redux tools
import { connect } from 'react-redux'
import { GetCalories} from './redux/action'

const DataScreens = ComposedComponent(
  DataComponent,
  dataScreenArr
)

class App extends Component {

  render() {
    return (
     <div className="container">
      <DataScreens/>
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
