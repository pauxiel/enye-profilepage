    // src/App.js

import React, { Component } from 'react';
import Profiles from './components/profiles' 
import * as ProfileApi from './ProfileApi'

class App extends Component {
      
     state = {
      profiles :  []
     }
  
     componentDidMount() {
      ProfileApi.getAll()
      .then((profiles) => {
           this.setState(() => ({
              profiles
           }))
      })
     }
  
      render () {
        return (
          // JSX to render goes here...
          <Profiles profiles = {this.state.profiles}/>
        );
      }
    }

    export default App;