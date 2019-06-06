import React, { Component } from 'react';
import axios from 'axios';
import rp from 'request-promise';
import _ from 'underscore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
//import logo from './logo.png';
import './App.css';
import ContentTabs from './components/tab.js';
import Header from './components/header.js';
import Form from './components/form.js';
import Detail from './components/detail.js';
import Travel from './components/travel.js';
import Plans from './components/whatdoto.js';
import background from './color.jpg';
//import Footer from './components/footer.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      regCode: '',
      status: '',
      comments: '',
      registered: false,
      page: 0,
      guests: [],
      temperatures: this.props.temperatures,
      accordion: false,
      accordionAir: false,
      accordionBus: false,
      accordionCar: false,
      accordionStay: false,
      accordionCity: false,
      accordionFall: false,
      accordionHalloween: false
    }
  }

  componentDidMount = function() {
    document.title = "Dallas & Drew Autumn Wedding Celebration 2019";
  }

  // General update state function
  updateState = (stateObject) => {
    this.setState(stateObject);
  }

  changeBool = (name) => {
    this.setState({
      [name]: !this.state[name]
    });
    console.log("Changed boolean to:", this.state[name]);
  }

  // Set state of input text fields:
  onInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(`${e.target.name} state:`, e.target.value);
  }

  // Add registrant:
  addRegistrant = (name, regCode, status, comments, guests, email) => {
    let options = {
      name: name,
      email: email,
      regCode: regCode,
      status: status,
      comments: comments,
      guests: guests
    };
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
      uri: window.location + "/api/weather",
      method: 'GET',
      qs: {
        type: 'observation',
        client_id: this.props.config.aeris_access_key,
        client_secret: this.props.config.aeris_secret_key,
        from: date
      },
      json: true
    };
    return rp(options)
    .then(response => {
      let periods = [];
      let temperatures = [];
      let weather = [];
      let weatherShort = [];
      response.periods.forEach((period)=>{
        let object = {};
        object.tempF = period.ob.tempF;
        object.weather = period.ob.weather;
        object.weatherShort = period.ob.weatherShort;
        periods.push(object);
        temperatures.push(period.ob.tempF);
        weather.push(period.ob.weather);
        weatherShort.push(period.ob.weatherShort);
      });
      let weatherData = {};
      weatherData.temperatures = _.uniq(temperatures);
      weatherData.weather = _.uniq(weather);
      weatherData.weatherShort = _.uniq(weatherShort);
      return weatherData;
    }).catch((e) => {
      console.log("Get weather error", e);
    })
  }

  // Add guest field:
  addGuest = (e) => {
    this.setState((prevState) => ({
      guests: [...prevState.guests, {name: '', id: ''}],
    }));
  }

  // Add guest to guests array: 
  handleGuests= (e) => {
    e.preventDefault();
    let guests = [...this.state.guests];
    console.log("Guests:", guests);
    guests.splice(e.target.dataset.id, 1, {name: e.target.value, id: e.target.id});
    this.setState({guests: guests});
  }

  // Remove guest from guest array:
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
            <div className="tab">
            <Header />
            <Router>
              <Route exact path='/' component={()=><Redirect to="/rsvp" />} />
              <Route path='/rsvp' component={()=>
                  <div className="tabContent">
                    <div className="alert">
                      <span className="alertTitle">Note:</span>
                      <span className="alertDescription">Registration deadline was June 1st</span>
                      <span className="alertSubtext">If you have questions or comments, please contact Drew or Dallas.</span>
                    </div>
                      {/* <Form
                          page={this.state.page}
                          name={this.state.name}
                          email={this.state.email}
                          regCode={this.state.regCode}
                          status={this.state.status}
                          comments={this.state.comments}
                          guests={this.state.guests}
                          onInputChange={this.onInputChange.bind(this)}
                          addRegistrant={this.addRegistrant.bind(this)}
                          updateState={this.updateState.bind(this)}
                          addGuest={this.addGuest.bind(this)}
                          handleGuests={this.handleGuests.bind(this)}
                          removeGuest={this.removeGuest.bind(this)}
                      /> */}
                  </div>
              }/>
              <Route path='/details' component={()=>
                <Detail 
                    temperatures={this.state.temperatures}
                    accordion={this.state.accordion}
                    changeBool={this.changeBool.bind(this)}
                    google_api={this.props.config.google_api}
                />
              }/>
              <Route path='/travel' component={()=>
                <Travel 
                  google_api={this.props.config.google_api}
                  changeBool={this.changeBool.bind(this)}
                  updateState={this.updateState.bind(this)}
                  accordionAir={this.state.accordionAir}
                  accordionBus={this.state.accordionBus}
                  accordionCar={this.state.accordionCar}
                  accordionStay={this.state.accordionStay}
                />
              }/>
              <Route path='/plans' component={()=>
                <Plans 
                  accordionCity={this.state.accordionCity}
                  accordionFall={this.state.accordionFall}
                  accordionHalloween={this.state.accordionHalloween}
                  changeBool={this.changeBool.bind(this)}
                />
              }/>
            </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;