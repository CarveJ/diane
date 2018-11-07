import React from 'react';
import '../styles/PersonalData.css'
import RowOfData from './rowOfData'

const PersonalData = ({gender='male',age=24,bodyweight=67,height=172,activityLevel='Savage',goal='get Sexy'}) => {

const items = {
  Gender: gender,
  Age: age,
  Bodyweight:bodyweight,
  Height:height,
  ActivityLevel: activityLevel,
  Goal:goal
}

  return (
      <div>
        <div className="personalData">
          {Object.keys(items).map((name,i) => {
            return <RowOfData name={name} value={items[name]} key={name}/>
          })}
        </div>
      </div>
  );
}

export default PersonalData;
