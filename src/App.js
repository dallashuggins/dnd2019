import React, { Component } from 'react';
//import rp from 'request-promise';
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import ContentTabs from './components/tab.js';
import Nav from './components/nav.js';
import creds from './credentials';
import background from './color.jpg';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      regCode: '',
      status: '',
      registered: false,
      page: 0
    }
  }
  // General clear state function
  updateState = (stateObject) => {
    console.log("Clear state:", stateObject);
    this.setState(stateObject);
  }

  // Set state of input text fields:
  onInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(`${e.target.name} state:`, this.state[e.target.name]);
  }

  addRegistrant = (name, regCode, status) => {
    let options = {
      name: name,
      regCode: regCode,
      status: status
    };
    console.log("Add Reg options:", options);
    if (regCode === creds.regCode) {
      axios.post(`/api/add`, options)
      .then(response => {
        console.log("Registration successful:", response.data)
        this.setState({
          registered: true,
          page: 1
        });
        return response.data;
      }).catch((e) => {
        console.log("Registration not successful:", e);
        alert('Something went wrong. Please refresh and try again. If the issue persists, contact Dallas or Drew.');
      });
    } else {
      alert ("Incorrect registration code. Check your invitation, or reach out to Drew or Dallas.")
    }
  }

  render() {
    const backgroundImage = {
        backgroundImage: `url(${background})`
    };
    return (
      <div className="App" style={backgroundImage}>
        {/*<header className="App-header">*/}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
          {/*<img src={logo} className="App-logo" alt="logo" />
          <br />*/}
        {/*</header>*/}
        <div className="App-body">
          <div className="App-inner">
            <ContentTabs
              page={this.state.page}
              name={this.state.name}
              regCode={this.state.regCode}
              status={this.state.status}
              onInputChange={this.onInputChange.bind(this)}
              addRegistrant={this.addRegistrant.bind(this)}
              updateState={this.updateState.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
