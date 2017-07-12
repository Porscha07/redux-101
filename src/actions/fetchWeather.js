// import $ from 'jquery';

// //fetchweather is an async operation. The dispatcher will not wait.
// // THis is why everyone seems to bad mouth javascript
// //redux middlware can rescue us.
// //redux middleware or redux promise has to be added when the store is created.
// var fetchWeather= function(){
// 		console.log("Fetch weather action in progress...")
// 	  componentDidMount(){
//     const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d'
//    //jquery AJAX always returns a promise. We no longer want to send our callback. Redux-Promise will handle if for us.
//     const thePromise = $.getJSON(weatherUrl)
//     // $.getJSON(weatherURL, (weatherData)=>{
//     	console.log(weatherData)
//       	return {
//       		type: 'GET_WEATHER',
//       		//we can return "thePromise"because redux-promise is going to make sure its
//       		payload:thePromise
//       	}
//     }
// }

// export default fetchWeather;
import $ from 'jquery';
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d'
const request = $.getJSON(weatherURL) 
export default function(){
  console.log("Fetching weather...")
  return {
    type: 'GET_WEATHER',
    payload: request
  }
}