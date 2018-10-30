import React, { Component } from 'react';
import '../styles/ShowData.css'

import PersonalData from './PersonalData'

class ShowData extends Component {

  render() {
    return (
      <div>
        <div className="showData">
          <div className="topHalf">
            <PersonalData/>
            <div className="calorieData">
            </div>
          </div>
          <div className="shoppingList">
          </div>
        </div>
      </div>
    );
  }
}

export default ShowData;
