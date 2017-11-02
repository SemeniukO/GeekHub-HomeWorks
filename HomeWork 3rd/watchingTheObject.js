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
	
	function setTheProp(i){
	   Object.defineProperty(user, i, {
	      get: function() {
	         console.log('The property (.'+i+') of object ('+name+') was called');
    		 return obj[i];
    	      },
    	      set: function(value) {
      	         obj[i] = value;
      		 console.log('The property (.'+i+') of object ('+name+') was changed');
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
