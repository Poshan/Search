//get element by id = entered user name
//or sent the username in the function and call the function on click
//use e w n s in bbox

function caller(username){
	query_string =  '<osm-script><query type=\"node\"><user name = "' + username + '"/> <bbox-query s=\"27.6839\" n=\"27.7299\" w=\"85.2885\" e=\"85.3368\"/> </query><print/> </osm-script>'
	// query_string = '<query type="node"> <user name = "' + username + '"/> <bbox-query {{bbox}}/><print/>';
	API_URL= "http://www.overpass-api.de/api/interpreter";
	POST = 'post';
	console.log(query_string);
	
	$.ajax({
		type:POST,
		url:API_URL,
		data:query_string,
		datatype:'json',
		success:function(data){
			console.log('testing');
			console.log(data);
		}
	});
	
};
caller('Poshan');

/*
<query type="node"> 
  <user name = "Apar"/> 
  <bbox-query {{bbox}}/>
</query>
 <print/>
 */
 // '<osm-script><query type=\"node\"><user name = "' + username + '"/> <bbox-query s=\"27.6839\" n=\"27.7299\" w=\"85.2885\" e=\"85.3368\"/> </query><print/> </osm-script>'