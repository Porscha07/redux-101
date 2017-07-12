import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//container-a component that knows about redux state.

//go get the createStore method from the redux module
import { createStore} from 'redux';
//import the Provider from react-redux so react and redux can talk.
//
import { Provider} from 'react-redux';
//import root reducer(index.js) so we can give it to the store...fill those shelves!!!
import reducers from './reducers/index';
// import weatherdata Component



const theStore = createStore(reducers);
console.log(theStore)
//reactdom.render takes 2 args(1. what, 2. where)
//provider-react (what)store- redux root-where
//store is a prop thats available to all children
ReactDOM.render(
	
	<Provider store={theStore}> 
	<div className={"app"}>
		<App />
	</div>
	</Provider>, 
 	document.getElementById('root') 
 );

//entry point for web pack to start the app ( localhost:3000)
//connect makes react available to redux so it can see it as its own properties.