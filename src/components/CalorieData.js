import React from 'react';
import '../styles/CalorieData.css'

import RowOfData from './rowOfData'

const CalorieData = ({BMR=1000,CalorieExpenditure=2000,TargetCalorie=2000}) => {

  const item = {
    BMR,
    CalorieExpenditure,
    TargetCalorie
  }

  return (
      <div>
        <div className="calorieData">
        <h2> Calorie Data </h2>
          {Object.keys(item).map((name,i)=>{
            return <RowOfData name={name} key={name} value={item[name]}/>
          })}
        </div>
      </div>
    );
}

export default CalorieData;
