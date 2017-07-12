export default function(state = [],action){
	switch(action.type){
		case"GET WEATHER":
		//code will run if action.type ="Get.Weather"
			return action.payload
		case "DoTheHokeyPokey":
			return state;
		default:
			return state;
	}
}