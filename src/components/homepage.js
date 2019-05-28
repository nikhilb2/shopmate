import React, { Component } from 'react';
import NavigationBar from './navBar'
import SimpleContainer from './container'
class Homepage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <SimpleContainer image='static/banner.png' text="text" />
      </div>
    )
  }

}

export default Homepage
