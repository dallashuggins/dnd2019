import React, { Component } from 'react';
import axios from 'axios';
import rp from 'request-promise';
import _ from 'underscore';
//import logo from './logo.png';
import './App.css';
import ContentTabs from './components/tab.js';
import background from './color.jpg';
//import Footer from './components/footer.js';
import countdown from 'countdown';

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
      months: 0,
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
      accordionAir: false,
      accordionBus: false,
      accordionCar: false,
      accordionStay: false,
      accordionCity: false,
      accordionFall: false,
      accordionHalloween: false
    }
  }

  counter = () => {
    //const fullCount = countdown( new Date(2019, 10, 12) ).toString();
    //const daysCount = countdown(new Date(2019, 10, 12), null, countdown.DAYS).toString();
    const count = countdown(new Date(2019, 10, 12)).toString();
    const array = count.split('and').join(',').split(',');
    let object = {};
      for (let i=0; i < array.length; i++) {
        console.log("Array:", array[i].trim().replace(/\D/g,''))
          if (array[i].indexOf('months') > -1) {
            this.setState({
              months: Number(array[i].trim().replace(/\D/g,''))
            })
            object.months = Number(array[i].trim().replace(/\D/g,''));
          }
          if (array[i].indexOf('days') > -1) {
            this.setState({
              days: Number(array[i].trim().replace(/\D/g,''))
            })
            object.days = Number(array[i].trim().replace(/\D/g,''));
          }
          if (array[i].indexOf('hours') > -1) {
            this.setState({
              hours: Number(array[i].trim().replace(/\D/g,''))
            })
            object.hours = Number(array[i].trim().replace(/\D/g,''));
          }
          if (array[i].indexOf('minutes') > -1) {
            this.setState({
              mins: Number(array[i].trim().replace(/\D/g,''))
            })
            object.mins = Number(array[i].trim().replace(/\D/g,''));
          }
          if (array[i].indexOf('seconds') > -1) {
            this.setState({
              secs: Number(array[i].trim().replace(/\D/g,''))
            })
            object.secs = Number(array[i].trim().replace(/\D/g,''));
          }
      }
      return object;
  }

  componentDidMount = function() {
    document.title = "Dallas & Drew Autumn Wedding Celebration 2019";
    this.interval = setInterval(() => this.counter(), 1000);
    console.log("componentWillMount newObject", this.interval)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  //setInterval(() => this.setState({ time: Date.now()}), 1000)

  // General update state function
  updateState = (stateObject) => {
    this.setState(stateObject);
    console.log("Update state:", stateObject);
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
      //console.log("getWeatherObserv response data periods", response.periods);
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
      //console.log("Weather data:", weatherData);
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
            <ContentTabs
              page={this.state.page}
              name={this.state.name}
              email={this.state.email}
              regCode={this.state.regCode}
              status={this.state.status}
              comments={this.state.comments}
              guests={this.state.guests}
              onInputChange={this.onInputChange.bind(this)}
              addRegistrant={this.addRegistrant.bind(this)} 
              updateState={this.updateState.bind(this)} // general func to pass an object and update state
              changeBool={this.changeBool.bind(this)} // general func to change boolean to opp. of val
              addGuest={this.addGuest.bind(this)} // adds guest fields
              handleGuests={this.handleGuests.bind(this)} // adds the guest to the db
              removeGuest={this.removeGuest.bind(this)} // removes guest when X is clicked
              temperatures={this.state.temperatures} // array of temperatures
              accordion={this.state.accordion} // controls accordion on Details page
              google_api={this.props.config.google_api} // Google creds
              // Counter: 
              months={this.state.months}
              days={this.state.days}
              hours={this.state.hours}
              mins={this.state.mins}
              secs={this.state.secs}
              counter={this.counter.bind(this)}
              // Accordions for travel page:
              accordionAir={this.state.accordionAir}
              accordionBus={this.state.accordionBus}
              accordionCar={this.state.accordionCar}
              accordionStay={this.state.accordionStay}
              // Accordions for plan/what-to-do page
              accordionCity={this.state.accordionCity}
              accordionFall={this.state.accordionFall}
              accordionHalloween={this.state.accordionHalloween}
            />
          </div>
        </div>
        {/*<Footer 
          // Counter: 
          months={this.state.months}
          days={this.state.days}
          hours={this.state.hours}
          mins={this.state.mins}
          secs={this.state.secs}
          counter={this.counter.bind(this)}
        />*/}
      </div>
    );
  }
}

export default App;