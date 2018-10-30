import React, { Component } from 'react';
import '../styles/ShowData.css'

import PersonalData from './PersonalData'
import CalorieData from './CalorieData'

class ShowData extends Component {

  render() {
    return (
      <div>
        <div className="showData">
          <div className="topHalf">
            <PersonalData/>
            <CalorieData/>
          </div>
          <div className="shoppingList">
          </div>
        </div>
      </div>
    );
  }
}

export default ShowData;
