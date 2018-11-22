import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config.json'
import rp from 'request-promise';
//import _ from 'underscore';

// Get historical weather observation temperatures:
const getTemps = () => {
  try {
    let options = {
      uri: window.location + "/api/temperatures",
      method: 'GET',
      json: true
    };
    return rp(options);
  } catch (e) {
    console.log(e);
    throw new Error (e);
  }
}

//const max = _.max(props.temperatures, function(temp) {return temp.maxTemp});
//const min = _.min(props.temperatures, function(temp) {return temp.minTemp});

const index = async () => {
  let tempResp = await getTemps();
  //console.log("Weather response:", tempResp);
  ReactDOM.render(
      <App config={config} temperatures={tempResp}/>,
      document.getElementById('root')
  );
};

index();

//ReactDOM.render(<App config={config} temperatures={getWeatherObservTemps}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();