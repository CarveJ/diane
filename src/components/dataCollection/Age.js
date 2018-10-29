import React from 'react';
import '../../styles/Age.css'

const Age = ({onClick = f=>console.log(f)}) => {
  let _age

  const handleClick = ()=> {
    onClick(_age.value)
  }

  return (
    <div>
      <div className="box">
        <div className="ageCon">
          <input type="number" refs={input => _age = input}/>
          <div className="DCButton" onClick={handleClick}>
            Yes
          </div>
        </div>
        <div className="nextCon">
          <div className="DCNext">
           Next
          </div>
        </div>
      </div>
    </div>
  )
}

export default Age;
