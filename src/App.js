import React, { Component } from 'react';

import './App.css';
import Banner from './components/banner.js'
import VariablesDiet from './components/variablesDiet.js'
import NutritionProfileDiet from './components/nutritionProfileDiet'



import { connect } from 'react-redux'
import { GetCalories} from './redux/action'





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



class App extends Component {

  render() {
    return (
     <div className="container">
      <Banner/>
      <VariablesDiet getCalories={this.props.getCalories}/>
      <NutritionProfileDiet setCalories={this.props.calories}/>
      <div className="ingredientsDiet">
      </div>
     </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
