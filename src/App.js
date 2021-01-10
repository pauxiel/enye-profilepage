    // src/App.js

// import React, { Component } from 'react';
import Profiles from './components/Profiles' 
// import * as ProfileApi from './ProfileApi'

// class App extends Component {
      
//      state = {
//       profiles :  []
//      }
  
//      componentDidMount() {
//       ProfileApi.getAll()
//       .then((profiles) => {
//            this.setState(() => ({
//               profiles
//            }))
//       })
//      }
  
//       render () {
//         return (
//           // JSX to render goes here...
//           <Profiles profiles = {this.state.profiles}/>
//         );
//       }
//     }

//     export default App;



    import React, {Component} from 'react';
// import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Profiles profiles={this.state.profiles} />
        )
    }

    state = {
        profiles: []
    };

    componentDidMount() {
        fetch('http://api.enye.tech/v1/challenge/records')
            .then(res => res.json())
          .then((data) => {
                // var newData = data.concat([data])
                this.setState({ profiles: data })
            })
            .catch(console.log)
    }
}

export default App;