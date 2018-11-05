import React, { Component } from 'react';
import '../styles/ShowData.css'

import PersonalData from './PersonalData'
import CalorieData from './CalorieData'
import ShoppingList from './ShoppingList'
import fakeFood from '../fakeObjData'

class ShowData extends Component {

  render() {
    return (
      <div>
        <div className="showData">
          <div className="topHalf">
            <PersonalData/>
            <CalorieData/>
          </div>
          <ShoppingList foodListObj={fakeFood}/>
        </div>
      </div>
    );
  }
}

export default ShowData;
