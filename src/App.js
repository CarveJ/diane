import React, { Component } from 'react';
import './App.css';

import Welcome from './components/Welcome'
import DataComponent from './components/dataCollection/dataCollection'

import { connect } from 'react-redux'
import { GetCalories} from './redux/action'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {gender: undefined}
    this.controlClick = this.controlClick.bind(this)
  }

  controlClick(name,variable){
    this.setState({
      [name]:variable
    })
    console.log(this.state)
  }

  render() {
    return (
     <div className="container">
      <DataComponent onClick={this.controlClick} input={true} name="Age" type="number" />
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
