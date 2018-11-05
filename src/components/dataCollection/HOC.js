import React, { Component }  from 'react'
import { connect } from 'react-redux'

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

      controlClick(name,variable){
        this.setState({
          data:{
            ...this.state.data,
            [name]:variable
          }
        })
      }

      controlScreen(){
        if (this.state.position < 6 ) {
          let screenNum = this.state.position + 1
          this.setState({
            position: screenNum
          })
        }
        else {
          fetch('http://localhost:3001/calories',{
            method:'POST',
            body: JSON.stringify(this.state.data),
            headers: {
              "Content-Type":"application/json"
            }
          })
          .then(res => res.json())
          .then(data => this.setState({data}) )
        }

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
