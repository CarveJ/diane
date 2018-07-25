import React from 'react';

class VariablesDiet extends React.Component {
  render() {
    return (
      <div className="variablesDiet">
        <form>
          <select name="gender">
            <option value="female"> Female </option>
            <option value="male"> Male </option>
          </select>
          <input type="number" name="age" id="age" min="1" max="" placeholder="age"/>
          <input type="text" placeholder="bodyweight"/>
          <input type="text" placeholder="bodyweight"/>
          <select name="Activity Level">
            <option value="codeworks programmer">codeworks programmer </option>
            <option value="Normal person">Normal person </option>
            <option value="Exercise is Life">Exercise is Life </option>
          </select>
          <select name="Goal">
          <option value="get Sexy"> get Sexy </option>
            <option value="get Really Sexy"> get Really Sexy </option>
            <option value="something lame like be healthy"> something lame like be healthy </option>
          </select>
        </form>
      </div>
    );
  }
}

export default VariablesDiet
