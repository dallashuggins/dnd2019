import React, { Component } from 'react';
//import rp from 'request-promise';
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import ContentTabs from './components/tab.js';
import background from './color.jpg';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      regCode: '',
      status: '',
      comments: '',
      registered: false,
      page: 0
    }
  }

  componentDidMount = function() {
    document.title = "Dallas & Drew Autumn Wedding Celebration 2019";
  }

  // General update state function
  updateState = (stateObject) => {
    this.setState(stateObject);
    console.log("Update state:", stateObject);
  }

  // Set state of input text fields:
  onInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(`${e.target.name} state:`, e.target.value);
  }

  addRegistrant = (name, regCode, status, comments) => {
    let options = {
      name: name,
      regCode: regCode,
      status: status,
      comments: comments
    };
    console.log("Add Reg options:", options);
    if (regCode === this.props.config.regCode) {
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
      alert("Incorrect registration code. Check your invitation, or reach out to Drew or Dallas.")
    }
  }

  getWeather = () => {
    let options = {
      client_id: this.props.config.aeris_access_key,
      client_secret: this.props.config.aeris_secret_key
    };
    axios.post(`/api/add`, options)
    .then(response => {
      console.log("Get Weather response:", response);
      return response;
    });
  }

  render() {
    const backgroundImage = {
        backgroundImage: `url(${background})`
    };
    return (
      <div className="App" style={backgroundImage}>
        <div className="App-body">
          <div className="App-inner">
            <ContentTabs
              page={this.state.page}
              name={this.state.name}
              regCode={this.state.regCode}
              status={this.state.status}
              comments={this.state.comments}
              onInputChange={this.onInputChange.bind(this)}
              addRegistrant={this.addRegistrant.bind(this)}
              updateState={this.updateState.bind(this)}
            />
            <button onChange={this.props.getWeather}>Test</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
