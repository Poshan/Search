//get element by id = entered user name
//or sent the username in the function and call the function on click
//use e w n s in bbox

function caller(username){
	query_string = '<query type="node"> <user name = "' + username + '"/> <bbox-query {{bbox}}/><print/>';
	API_URL= "http://www.overpass-api.de/api/interpreter";
	console.log(query_string);
	/*
	$.ajax({
		type:POST,
		url:API_URL,
		data:query_string,
		datatype:json,
		success:function(data){
			console.log(data);
		}
	});
	*/
} 
caller('poshan');
