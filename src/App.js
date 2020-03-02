import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Globalstyles from './styles/Global'

class App extends Component() {
  state = {
    navbarOpen: false
  }
  handleNavBar = () => {
    this.setState({navbarOpen: !this.state.navbarOpen})
  }
  render() {
    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <Globalstyles/>
      </>
    )
  }

}

export default App;
//How to upload files to the server using JavaScript: https://flaviocopes.com/file-upload-using-ajax/
