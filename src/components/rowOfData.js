import React from 'react';
import '../styles/RowOfData.css'

const RowOfData = ({name,value}) => (
  <div>
    <div className="rowOfData">
      <div className="nameOfData">{name}</div>
      <div className="valueOfData">{value}</div>
    </div>
  </div>
);

export default RowOfData;
