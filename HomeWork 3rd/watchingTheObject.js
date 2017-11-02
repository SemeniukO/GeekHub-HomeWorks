var user = {
	name:'user',
	student:'Kevin',
	surname:'Fox',
	age:18
    }


function watchingTheObjec(user){
   var name = user.name || 'The object name wasn"t set';
   var obj = {};
   for (var key in user){
	obj[key] = user[key];
	
	function setTheProp(key){
	   Object.defineProperty(user, key, {
	      get: function() {
	         console.log('The property .'+key+' of object "'+name+'" was called');
    		 return obj[key];
    	      },
    	      set: function(value) {
      	         obj[key] = value;
      		 console.log('The property .'+ key+' was changed');
    	      }
  	   });
	}
     setTheProp(key);
   }
}

watchingTheObjec(user);

console.log(user.surname);

user.surname = 1231;

console.log(user.surname);
