import React, { Component } from 'react';
import '../containers/App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';

class App extends Component {
  state = {
    activeItem: 'home',
    universities: []
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
