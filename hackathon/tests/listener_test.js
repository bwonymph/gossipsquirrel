function listener(){
	document.addEventListener('csEvent', function(event) {
	var data = event.detail;

	return data;
	});
}


function main(){
	address = listener();
	console.log(address);
}



main();