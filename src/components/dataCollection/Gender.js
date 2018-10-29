import React from 'react';
import '../../styles/Gender.css'

const Gender = ({onClick= f=>console.log(f)}) => {

  let _gender
  const handleClick = () => {
    onClick(_gender.value)
  }

return (
    <div>
      <div className="box">
        <div className="genderCon">
          <div className="DCInput">
            <input refs={input => _gender = input} type='text'/>
          </div>
          <div onClick={handleClick} className="DCButton">
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
  );
}

export default Gender;
