import React, { Component } from 'react';
import './App.css';

import MainApp from './components/MainApp'
import Auth from './components/Auth'

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/'

class App extends Component {
  state = {
    isAuthed: localStorage.getItem('token') ? true : false 
  }
  render() {
    if(this.state.isAuthed){
      return <MainApp updateAuth = {this.updateAuth}/> 
    }else{
      return <Auth updateAuth = {this.updateAuth}/>
    }
  }

  updateAuth = (authed) => {
    this.setState({
      isAuthed: authed
    })
  }
}

export default App;
