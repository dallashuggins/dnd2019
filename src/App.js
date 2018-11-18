import React, { Component } from 'react';
//import rp from 'request-promise';
import axios from 'axios';
import rp from 'request-promise';
import _ from 'underscore';
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
      page: 0,
      guests: []
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

  // Add registrant:
  addRegistrant = (name, regCode, status, comments, guests) => {
    let options = {
      name: name,
      regCode: regCode,
      status: status,
      comments: comments,
      guests: guests
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
        //return response.data;
      }).catch((e) => {
        console.log("Registration not successful:", e);
        alert('Something went wrong. Please refresh and try again. If the issue persists, contact Dallas or Drew.');
      });
    } else {
      alert("Incorrect registration code. Check your invitation, or reach out to Drew or Dallas.")
    }
  }

  // Get weather forecast:
  getWeatherForecast = () => {
    let options = {
      url: `/api/weather`,
      method: 'GET',
      qs: {
        client_id: this.props.config.aeris_access_key,
        client_secret: this.props.config.aeris_secret_key,
        type: 'forecast'
      }
    };
    return rp(options)
    .then(response => {
      return response.data.periods;
    }).catch((e) => {
      console.log("Get weather error", e);
    })
  }

  // Get historical weather observations:
  getWeatherObserv = (date) => {
    let options = {
      url: `/api/weather`,
      method: 'GET',
      qs: {
        client_id: this.props.config.aeris_access_key,
        client_secret: this.props.config.aeris_secret_key,
        from: date,
        type: 'observation'
      }
    };
    console.log("getWeatherObserv options", options);
    return rp(options)
    .then(response => {
      console.log("getWeatherObserv response", response.data.periods);
      return response.data.periods;
    }).catch((e) => {
      console.log("Get weather error", e);
    })
  }

  addGuest = (e) => {
    this.setState((prevState) => ({
      guests: [...prevState.guests, {name: '', id: ''}],
    }));
  }

  handleGuests= (e) => {
    e.preventDefault();
    let guests = [...this.state.guests];
    console.log("Guests:", guests);
    guests.splice(e.target.dataset.id, 1, {name: e.target.value, id: e.target.id});
    //guests[e.target.dataset.id] = {name: e.target.value, id: e.target.id};
    this.setState({guests: guests});
    /*if (["name"].includes(e.target.className) ) { // if the event class matches the dynamic input
      let guests = [...this.state.guests] // copy of guests state array with spread operator
      // use e.target’s dataset to match the input to its corresponding object
      // use the e.target’s classname to grab the guest object’s name
      guests[e.target.dataset.id][e.target.className] = e.target.value;
      // use setState to save the state change and trigger a re-render of our form
      this.setState({ guests: guests }, () => console.log("Guests:", this.state.guests))
    } else {
      // e.target.value grabs input value
      // using [] to dynamically match our state using each input’s name attribute
      this.setState({[e.target.name]: e.target.value})
    }*/
  }

  removeGuest = (id) => {
    console.log("Remove id:", id);
    let guests = [...this.state.guests];
    let index = _.findIndex(guests, {id: id});
    guests.splice(index, 1);
    this.setState({
      guests: guests
    })
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
              guests={this.state.guests}
              onInputChange={this.onInputChange.bind(this)}
              addRegistrant={this.addRegistrant.bind(this)}
              updateState={this.updateState.bind(this)}
              getWeatherObserv={this.getWeatherObserv.bind(this)}
              addGuest={this.addGuest.bind(this)}
              handleGuests={this.handleGuests.bind(this)}
              removeGuest={this.removeGuest.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
