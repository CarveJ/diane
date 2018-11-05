import React, { Component }  from 'react'

const ComposedComponent = (DataScreen, arrayOfArgs) =>
    class ComposedComponent extends Component {
      constructor(props){
        super(props)

        this.state = {
          position:0,
          data:{}
        }

        this.controlClick = this.controlClick.bind(this)
        this.controlScreen = this.controlScreen.bind(this)
      }

      controlClick(value,variable){
        this.setState({
          data:{
            ...this.state.data,
            [value]:variable
          }
        })
      }

      controlScreen() {
        if (this.state.position < 5 ) {
          let screenNum = this.state.position + 1
          this.setState({
            position: screenNum
          })
        }
        else {

          this.props.getCalories(this.state.data)
        }
      }

      renderScreen(i){
        return <DataScreen onClick={this.controlClick} nextScreen={this.controlScreen} {...arrayOfArgs[i]}/>
      }

      render(){
        console.log(this.state.data)
        return(
          <div>
            {this.renderScreen(this.state.position)}
          </div>
        )
      }

    }





export default ComposedComponent;
