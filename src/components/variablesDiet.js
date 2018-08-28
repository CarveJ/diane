
import React from 'react';
import '../styles/variablesDiet.css'

class VariablesDiet extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gender: 'Female',
      age:'',
      height:'',
      bodyweight:'',
      activityLevel:'Codeworks Programmer',
      goal:'Get sexy'
    }
  }

  postData = (formInformation) => {
    let newData = {
      gender:this.state.gender,
      age:this.state.age,
      height:this.state.height,
      bodyweight:this.state.bodyweight,
      activityLevel:this.state.activityLevel,
      goal:this.state.goal
    }
     formInformation.preventDefault()

    fetch('http://localhost:3001/calories',{
      method:'POST',
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newData)
    }).then(res => res.json())
    .then(calorieInfo => this.props.getCalories(calorieInfo))

  }

  handleEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderOptions = ( options ) => {
    return options.map( anOption => {
      return <option value={anOption}> {anOption} </option>
    })
  }

  renderSelect = (label , name, arrayOfOptions ) => {
    return (
      <div className="divider">
        <div> {label} </div>
        <select name={name} value={this.state[name]} onChange={this.handleEvent}>
        {this.renderOptions(arrayOfOptions)}
        </select>
      </div>
    )
  }

  renderInput = (label, name, type, min, max) => {
    return(
      <div className="divider">
        <div> {label} </div>
        <input name={name} type={type} value={this.state[name]} onChange={this.handleEvent} min={min} max={max} step="1" placeholder=""/>
      </div>
    )
  }

  render() {
    return (
      <div className="variablesDiet">

        <div className="variablesNames">

          <form onSubmit={this.postData}>
            {this.renderSelect('Gender', 'gender', ['female','male'])}
            {this.renderInput('Age', 'age', 'number' , '1', '99')}
            {this.renderInput('Height', 'height', 'number' , '99', '230')}
            {this.renderInput('Bodyweight', 'bodyweight', 'number' , '40', '200')}
            {this.renderSelect('Activity Level', 'activityLevel', ['Codeworks Programmer','Office Worker','Normal Person','Regular Exercise','Savage'])}
            {this.renderSelect('Goal', 'goal', ['Get Sexy', 'Maintenece','Lose 10%','Lose 15%','Lose 20%'])}
            <button className="sexyButton" type='Submit'> Click baby </button>
          </form>

        </div>

      </div>
    );
  }
}

export default VariablesDiet
