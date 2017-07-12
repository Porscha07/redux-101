import React, { Component } from 'react';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import fetchWeather from '../actions/fetchWeather';
import  {connect} from 'react-redux';
class WeatherData extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   weatherData: []
    // }
  }

  componentDidMount() {
    this.props.fetchWeather()
  }
  render() {
    if(this.props.weatherData.main == undefined){
      return (<h1>Loading...</h1>)
    }
    return(
      <div>
       <h3>Atlanta Weather</h3>
        &deg;{this.props.weatherData.main.temp}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    weatherData: state.weather
  }
}
 function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchWeather: fetchWeather
  }, dispatch)
}

var thingCreatedByConnectThatKnowsAboutCompononetAndReduxStuff = connect (mapStateToProps, mapDispatchToProps) (WeatherData);
export default thingCreatedByConnectThatKnowsAboutCompononetAndReduxStuff