import React from 'react'
import { Slider } from 'antd'
import 'antd/dist/antd.css'
import '../styles/nutritionProfileDiet.css'


const style = {
    float:'left',
    height:300,
    marginLeft: 70,
  }

class NutritionProfileDiet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Protein: 40,
      Carbohydrate: 30,
      Fats: 30
    }

    this.handleChangeProteins = this.handleChangeProteins.bind(this)
    this.handleChangeCarbs = this.handleChangeCarbs.bind(this)
    this.handleChangeFats = this.handleChangeFats.bind(this)

  }

  handleChangeProteins = (value) => {
    this.setState({Protein: value})
  }

  handleChangeCarbs = (value) => {
    this.setState({Carbohydrate: value})
  }

  handleChangeFats = (value) => {
    this.setState({Fats: value})
  }

  getFoodInfo = () => {

    const queryInfo = {
      calories: {...this.props.setCalories},
      macros: {...this.state}
    }

    fetch('http://localhost:3001/foodRequirements', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json; charset=utf-8"
      },
      body: JSON.stringify(queryInfo)
    }).then( res => res.json() )
    .then( info => console.log(info))
  }

render() {
    return (
        <div className="nutritionProfileDiet">

          <div className="caloreInformation">
            <div className="BMR">
              <h3>BMR </h3> <span>{this.props.setCalories.BMR}</span>
            </div>
            <div className="CalorieExpenditure">
              <h3> CalorieExpenditure </h3> <span>{this.props.setCalories.CalorieExpenditure}</span>
            </div>
            <div className="TargetCalorie">
              <h3> TargetCalorie </h3> <span>{this.props.setCalories.TargetCalorie} </span>
            </div>
          </div>

          <div className="sliders">

            <div className="PROTEINS">
              PROTEIN
              <div className="sliderProteins" >
                <div style={style}>
                  <Slider vertical defaultValue={40} onChange={this.handleChangeProteins} />
                </div>
              </div>
            </div>

            <div className="CARBS">
              CARBS
                <div className="sliderCarbs">
                  <div style={style}>
                    <Slider vertical defaultValue={30} onChange={this.handleChangeCarbs} />
                  </div>
                </div>
            </div>

            <div className="FATS">
              FATS
              <div className="sliderFATS">
                <div style={style}>
                  <Slider vertical defaultValue={30} onChange={this.handleChangeFats} />
                </div>
              </div>
            </div>

          </div>

          <button type="button" id="buttonThatSendsFoodInfo" onClick={this.getFoodInfo} />

      </div>
    );
}
}




export default NutritionProfileDiet
