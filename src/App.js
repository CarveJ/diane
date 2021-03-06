import React, { Component } from 'react';
import './App.css';

//importing components
import Welcome from './components/Welcome'
import DataComponent from './components/dataCollection/dataCollection'
import ComposedComponent from './components/dataCollection/HOC'
import dataScreenArr from './dataScreensArr/dataScreensArr'
import ShowData from './components/ShowData'
import Loader from './components/Loader'

//importing redux tools
import { connect } from 'react-redux'
import { GetCalories, AddPersonalData} from './redux/action'

const DataScreens = ComposedComponent(
  DataComponent,
  dataScreenArr
)

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      check:0
    }
  }

  renderScreen(){
    return (this.props.loading)?
      <Loader/>:
        (!this.props.showData)?
          <DataScreens GetCalories={this.props.GetCalories} AddPersonalData={this.props.AddPersonalData}/>:
          <ShowData/>
  }

  render() {
    console.log(this.props)
    return (
     <div className="container">
     {this.renderScreen()}
     </div>
    );
  }
}

const mapStateToProps = ( state ) => ({
  calories: state.calories,
  loading: state.loading,
  showData: state.showData
})

const mapDispatchToProps = dispatch => ({
    GetCalories: apiInformation => dispatch(GetCalories(apiInformation)),
    AddPersonalData: data => dispatch(AddPersonalData(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
