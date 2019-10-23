import React, { Component } from 'react'
export default class Like extends Component {
  render(props){
    let { title, task } = this.props
    return(
      <button onClick = { task }>{ title }</button>
    )}
}



    

     

