import React from 'react';
import '../styles/variablesDiet.css'

class VariablesDiet extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gender: '',
      age:'',
      height:'',
      bodyweight:'',
      activityLevel:'',
      goal:''
    }

    this.handleChangeGender = this.handleChangeGender.bind(this)
    this.handleChangeAge = this.handleChangeAge.bind(this)
    this.handleChangeHeight = this.handleChangeHeight.bind(this)
    this.handleChangeBodyweight = this.handleChangeBodyweight.bind(this)
    this.handleChangeActivityLevel = this.handleChangeActivityLevel.bind(this)
    this.handleChangeGoal = this.handleChangeGoal.bind(this)

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

    fetch("local",{
      method:'POST',
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newData)
    })

  }

  handleChangeGender = (event) => {
    this.setState({gender: event.target.value})
  }

  handleChangeAge = (event) => {
    this.setState({age: event.target.value})
  }

  handleChangeHeight = (event) => {
    this.setState({Height: event.target.value})
  }

  handleChangeBodyweight = (event) => {
    this.setState({bodyweight: event.target.value})
  }

  handleChangeActivityLevel = (event) => {
    this.setState({activityLevel: event.target.value})
  }

  handleChangeGoal = (event) => {
    this.setState({goal: event.target.value})
  }

  render() {
    return (
      <div className="variablesDiet">
        <div className="variablesNames">
          <form onSubmit={this.postData}>
            <div className="try">
              <div> Gender </div>
                <select name="gender" vale={this.state.gender} onChange={this.handleChangeGender}>
                  <option value="female"> Female </option>
                  <option value="male"> Male </option>
                </select>
            </div>
            <br/>
            <div className="try">
              <div> Age </div>
              <input type="number" value={this.state.age} onChange={this.handleChangeAge} id="age" min="1" max="99" placeholder=""/>
            </div>

            <br/>
            <div className="try">
              <div> Height(cm) </div>
              <input type="number" value={this.state.height} onChange={this.handleChangeHeight} min="99" max="230" placeholder=""/>
            </div>

            <br/>
            <div className="try">
              <div> bodyweight </div>
              <input type="number" value={this.state.bodyweight} onChange={this.handleChangeBodyweight} min="1" max="99" placeholder=""/>
            </div>

            <br/>
            <div className="try">
              <div> Activity Level </div>
              <select name="Activity Level" value={this.state.activityLevel} onChange={this.handleChangeActivityLevel} >
                <option value="codeworks programmer"> codeworks programmer (0) </option>
                <option value="Normal person">Normal person (1) </option>
                <option value="Exercise is Life"> Exercise is Life (2) </option>
              </select>
            </div>

            <br/>
            <div className="try">
              <div> Goal </div>
              <select name="Goal" value={this.state.goal} onChange={this.handleChangeGoal}>
                <option value="get Sexy"> get Sexy </option>
                <option value="get Really Sexy"> get Really Sexy </option>
                <option value="something lame like be healthy"> something lame like be healthy </option>
              </select>
            </div>
            <br/>
            <input type="submit" value="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default VariablesDiet
