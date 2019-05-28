import React, { Component } from 'react';
import NavigationBar from './navBar'
import SimpleContainer from './container'
const text = "Background and development"
const caption = "Convergent the dictates of the costumer: background and development"
class Homepage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <SimpleContainer image='static/banner.png' text={text} caption={caption} buttonText='View All'/>
      </div>
    )
  }

}

export default Homepage
