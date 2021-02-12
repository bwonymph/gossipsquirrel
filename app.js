const fetch = require("node-fetch");



function listener(){
	document.addEventListener('csEvent', function(event) {
	var data = event.detail;

	return data;
	});
}


const HTScheck = async () => {
	const response = await fetch('https://api.dragonglass.me/hts/v1/accounts/0.0.950/balances'); 
	const myJson = await response.json();
	var output = JSON.stringify(myJson);
	var found = 0;
	for (i=0; i < myJson.tokenBalance.length; i++){
		if (myJson.tokenBalance[i].tokenId == "0.0.107620") //token you are looking for
			found = 1; //token was found. need to refine to check balance later
	}
	console.log(found);
	// console.log(output); //outputs all tokens to console
}


function main(){
	var address = listener();
}

HTScheck();