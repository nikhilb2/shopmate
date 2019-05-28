import React, { Component } from 'react';
import NavigationBar from './navBar'
import windowSize from 'react-window-size';

class Homepage extends Component {
  render() {
    const { windowWidth, windowHeight } = this.props
    return (
      <div>
        <NavigationBar />
      </div>
    )
  }

}

export default windowSize(Homepage)
