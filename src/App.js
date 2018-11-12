import React, { Component } from 'react';
import rp from 'request-promise';
import logo from './logo.png';
import './App.css';
import Form from './components/form.js';
import HttpsRedirect from 'react-https-redirect';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      regCode: ''
    }
  }
  // General clear state function
  clearState = (stateObject) => {
    console.log("Clear state:", stateObject);
    this.setState(stateObject);
  }

  // Set state of input text fields:
  onInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(`name state:`, this.state[e.target.name]);
  }

  addRegistrant = (name, regCode) => {
    let options = {
      method: 'POST',
      uri: 'https://dnd2019.com/add',
      body: {
        name: name,
        regCode: regCode
      },
      json: true
    };
    if (regCode === this.props.creds.regCode) {
      return rp (options);
    } else {
      alert ("Incorrect registration code. Check your invitation, or reach out to Drew or Dallas.")
    }
  }

  render() {
    return (
      <HttpsRedirect>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <Form
              name={this.state.name}
              regCode={this.state.regCode}
              onInputChange={this.onInputChange.bind(this)}
              addRegistrant={this.addRegistrant.bind(this)}
              clearState={this.clearState.bind(this)}
            />
          </header>
        </div>
      </HttpsRedirect>
    );
  }
}

export default App;
