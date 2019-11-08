import React, { Component } from 'react';
import axios from 'axios';
import rp from 'request-promise';
import _ from 'underscore';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';
//import logo from './logo.png';
import './App.css';
// import ContentTabs from './components/tab.js';
import Header from './components/header.js';
import Counter from './components/counter.js';
import Form from './components/form.js';
import ThankYou from './components/thanks.js';
import Detail from './components/detail.js';
import Events from './components/events.js';
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
      accordionHalloween: false,
      accordionAll: false,
      accordionThurs: false,
      accordionFri: false,
      accordionSun: false,
      accordionMon: false,
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
              <Route exact path='/' component={()=><Redirect to="/thanks" />} />
              <Route path='/thanks' component={()=>
                <ThankYou />
              }/>
              <Route path='/rsvp' component={()=>
                  <div className="callout">
                  <h1>See you October 12th!</h1>
                  <hr />
                  <div className="detailText">
                      <p className="val">The date is quickly approaching!</p>
                      <p className="val" style={{fontWeight: 'bold'}}>October 12th, 2019 at 1:30PM</p>
                      <div className="detailTextIndiv">
                          <p className="val">
                            Find more information on events surrounding the 
                            day of the wedding on the <a href="/events">Events</a> page, or get more general 
                            details on the <a href="/details">Details</a> page. 
                          </p>
                          <p className="val">
                            We can't wait to see you soon!
                          </p>
                      </div>
                  </div>
                    <Counter />
                      <Form
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
                      />
                  </div>
              }/>
              <Route path='/details' component={()=>
                <Detail 
                    temperatures={this.state.temperatures}
                    changeBool={this.changeBool.bind(this)}
                />
              }/>
              <Route path='/events' component={()=>
                <Events 
                  accordionThurs={this.state.accordionThurs}
                  accordionFri={this.state.accordionFri}
                  accordionSun={this.state.accordionSun}
                  accordionMon={this.state.accordionMon}
                  changeBool={this.changeBool.bind(this)}
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
                  accordionAll={this.state.accordionAll}
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