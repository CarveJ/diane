import React, { Component } from 'react';
import '../styles/ShowData.css'

import PersonalData from './PersonalData'
import CalorieData from './CalorieData'
import ShoppingList from './ShoppingList'
import fakeFood from '../fakeObjData'

import { connect } from 'react-redux'

class ShowData extends Component {

  render() {
    return (
      <div>
        <div className="showData">
          <div className="topHalf">
            <PersonalData {...this.props.personalData}/>
            <CalorieData {...this.props.calories}/>
          </div>
          <ShoppingList foodListObj={fakeFood}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
    personalData: state.personalData,
    calories: state.calories
})

export default connect(mapStateToProps)(ShowData);
