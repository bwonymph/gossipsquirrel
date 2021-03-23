const fetch = require("node-fetch");

const userAction = async () => {
	const response = await fetch('https://api.dragonglass.me/hts/v1/accounts/0.0.950/balances');
	const myJson = await response.json();
	var output = JSON.stringify(myJson);
	console.log(output);
}

userAction();