import React from 'react';
import '../styles/Welcome.css'

const Welcome = ({onClick= f=>console.log(f)}) => (
  <div>
    <div className="welcome">
      <h1> Welcome </h1>
      <div
        onClick={()=>onClick}
        className="begin">
        Begin </div>  
    </div>
  </div>
);

export default Welcome;
