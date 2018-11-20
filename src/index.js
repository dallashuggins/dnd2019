import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config.json'
import rp from 'request-promise';
import _ from 'underscore';

// Get historical weather observation temperatures:
const getWeatherObservTemps = (dates) => {
  try {
    let array = [];
    dates.forEach((date) => {
      let options = {
        uri: window.location.href + "/api/weather",
        method: 'GET',
        qs: {
          type: 'observation',
          client_id: config.aeris_access_key,
          client_secret: config.aeris_secret_key,
          from: date
        },
        json: true
      };
      return rp(options).then(response => {
        console.log("response", response)
        response.periods.forEach((period) => {
          console.log("period", period)
          let newTemp = period.ob.tempF.toString();
          if (_.contains(array, newTemp) === false) {
            array.push(newTemp);
          }
        })
      })
    });
    console.log("Array", array);
    return array;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

const dates = [
  '2017/10/05',
  '2017/10/06',
  '2017/10/07',
  '2017/10/08',
  '2017/10/09',
  '2017/10/10',
  '2017/10/11',
  '2017/10/12',
  '2017/10/13',
  '2017/10/14',
  '2017/10/15',
  '2017/10/16',
  '2017/10/17',
  '2017/10/18',
  '2017/10/19'
];

const index = async () => {
  //let weatherResp = await getWeatherObservTemps(dates);
  //console.log("Weather response:", weatherResp);
  ReactDOM.render(
      <App config={config} /*temperatures={weatherResp}*//>,
      document.getElementById('root')
  );
};

index();

//ReactDOM.render(<App config={config} temperatures={getWeatherObservTemps}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();