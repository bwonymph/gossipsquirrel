const fetch = require("node-fetch");
const request = require('request');

function listener(){
	document.addEventListener('csEvent', function(event) {
	var data = event.detail; //get address from extension

	return data.account;
	});
}

function test(addr){ //async version
	var addr1 = addr;
	const HTScheck = async () => {
		// var testadd = "0.0.950";
		testadd='https://api.dragonglass.me/hts/v1/accounts/'+addr1+'/balances';
		const response = await fetch(testadd); // API tp get account address
		const myJson = await response.json();
		var output = JSON.stringify(myJson);
		var found = 0;
		for (i=0; i < myJson.tokenBalance.length; i++){
			if (myJson.tokenBalance[i].tokenId == "0.0.107620") //token you are looking for
				found = 1; //token was found. need to refine to check balance later
		}
		// console.log(found);
		// console.log(output); //outputs all tokens to console
	}

	HTScheck();
	// return found;
}

function test2(addr){ //non async version
	var addr1 = addr;
	var found =0;
	testadd='https://api.dragonglass.me/hts/v1/accounts/'+addr1+'/balances';
	request(testadd, { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
		var output = JSON.stringify(body);
		for (i=0; i < body.tokenBalance.length; i++){
			if (body.tokenBalance[i].tokenId == "0.0.107620") //token you are looking for
				found = 1; //token was found. need to refine to check balance later
		}
		console.log(found);
	});
	return found;
}



function main(){
	console.log("Running");
	test2("0.0.950", function(){

	if (results){
		console.log(results);
	}
	else{
		console.log("fail");
	}
	});
}

main();





