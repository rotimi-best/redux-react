import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <PostForm></PostForm>
          <hr></hr>
          <Posts></Posts>
        </div>
      </Provider>
    );
  }
}

export default App;
