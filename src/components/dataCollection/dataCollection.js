import React from 'react';
import '../../styles/DataComponent.css'

const DataComponent = ({onClick = f => console.log(f), nextScreen = v=>console.log(v),
   input = false, dropDown = false , name="wrong", type ="number", options=[]}) => {

  let _something = React.createRef()

  const handleClick = ()=>{
    onClick(name, _something.current.value)
  }

  const inputOrSelect = () => {
    return (input)? <input type={type} ref={_something} name={name}/> :
        (dropDown)?
        <select ref={_something} name={name}>
          {options.map( (n,i) => {
            return (
              <option key={i} value={n}>
                {n}
              </option>
          )
          })}
        </select>:
        <h1> Error </h1>
      }


  return (
    <div>
      <div className="box">
        <div className="dataComponentCon">
          <h1>{name}</h1>
          <div className="DCInput">
            {inputOrSelect()}
          </div>
          <div onClick={handleClick} className="DCButton">
            Yes
          </div>
        </div>
        <div className="nextCon">
          <div className="DCNext" onClick={nextScreen}>
           Next
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataComponent;
