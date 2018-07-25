import React, { Component } from 'react';

import './App.css';
import Banner from './components/banner.js'
import VariablesDiet from './components/variablesDiet.js'

class App extends Component {

  render() {
    return (
     <div className="container">
      <Banner/>
      <VariablesDiet/>
      <div className="nutritionProfileDiet">
      </div>
      <div className="ingredientsDiet">
      </div>
     </div>
    );
  }
}

export default App;
