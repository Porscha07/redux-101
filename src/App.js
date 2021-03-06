import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './Students';
import WeatherData from './Containers/WeatherData';
import ReduxStudents from './Containers/ReduxStudents';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<Router>
		      <div className="App">
			      	<Link to ="/">Weather</Link> |
			      	<Link to ="/students">Students</Link> |
			      	<Link to ="/old-students">Basic Students</Link>
			      	<Route exact path='/' component={WeatherData} />
			      	<Route path='/students' component={ReduxStudents} />
			      	<Route path='/old-students' component={Students} />
			         <Students />
		      	
		      </div>
         </Router>
    );
  }
}

export default App;

