import React from 'react';
import _ from 'underscore';
import countdown from 'countdown';

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      months: 0,
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0
    }
  }
  componentDidMount = function() {
    this.interval = setInterval(() => this.counter(), 1000);
  }
  counter = () => {
    //const fullCount = countdown( new Date(2019, 10, 12) ).toString();
    //const daysCount = countdown(new Date(2019, 10, 12), null, countdown.DAYS).toString();
    const count = countdown(new Date(2019, 10, 12)).toString();
    const array = count.split('and').join(',').split(',');
    let object = {};
      for (let i=0; i < array.length; i++) {
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
    render () {
      const { months, days, hours, mins, secs } = this.state;
      return (
        <div className="counter" onMouseEnter={this.counter} onSelect={this.counter} onClick={this.counter}>
            <h3 className="counter">Countdown</h3>
            <div className="months">
                {months}
                <p className="text">Months</p>
            </div>
            <div className="days">
                {days}
                <p className="text">Days</p>
            </div>
            <div className="hours">
                {hours}
                <p className="text">Hours</p>
            </div>
            <div className="mins">
                {mins}
                <p className="text">Minutes</p>
            </div>
            <div className="secs">
                {secs}
                <p className="text">Seconds</p>
            </div>
        </div>
      );
    }
  }
  
  export default Counter;