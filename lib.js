//Testing Numbers
module.exports.absolute = function(number){

if (number >0) return number;
if (number <0) return -number;
return 0;
}


//Testing strings
module.exports.strings = function(name){

	return 'welcome '+name ;
}

//Testing arrays

module.exports.getCurrency = function(){

	return ['KSH', 'USH','TSH'] ;
}



//Testing objects
module.exports.getProduct= function(productId){
	return {id: productId, price: 10}
}




//Testing exceptions

module.exports.registerUser = function(username){
  if(!username) throw new Error('username in mandatory');

  return{id: new Date().getTime(), username: username}
}