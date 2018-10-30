import React, { Component }  from 'react'

const ComposedComponent = (DataScreen, arrayOfArgs) =>
    class ComposedComponent extends Component {
      constructor(props){
        super(props)

        this.state = {
          position:0,
          age:undefined,
          height:undefined,
          bodyweight: undefined,
          gender: undefined,
          activityLevel: undefined,
          goal: undefined
        }

        this.controlClick = this.controlClick.bind(this)
        this.controlScreen = this.controlScreen.bind(this)
      }

      controlClick(name,variable){
        this.setState({
          [name]:variable
        })
      }

      controlScreen(){
        if (this.state.position < 6 ) {
          let screenNum = this.state.position + 1
          this.setState({
            position: screenNum
          })
        }
        //fetch data to backend to retrieve numbers
      }

      renderScreen(i){
        return <DataScreen onClick={this.controlClick} nextScreen={this.controlScreen} {...arrayOfArgs[i]}/>
      }

      render(){
        console.log(this.state)
        return(
          <div>
            {this.renderScreen(this.state.position)}
          </div>
        )
      }
    }

export default ComposedComponent ;
