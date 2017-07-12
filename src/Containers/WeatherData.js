import React, { Component } from 'react';
import $ from 'jquery';
class WeatherData extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      weatherData: []
    }
  }
  componentDidMount() {
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d'
    $.getJSON(weatherURL, (weatherData)=>{
      this.setState({
        weatherData: weatherData
      })
      console.log(weatherData)
    })
  }
  render() {
    if(this.state.weatherData.main == undefined){
      return (<h1>Loading...</h1>)
    }
    return(
      <div>
       <h3>Atlanta Weather</h3>
        {this.state.weatherData.main.temp}
      </div>
    )
  }
}
export default WeatherData;