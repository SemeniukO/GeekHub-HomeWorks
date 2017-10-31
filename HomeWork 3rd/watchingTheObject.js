user = {
    student:'Kevin',
    surname:'Fox',
    age:18,
    sad:32,
}

function check(user){
    var surname = user.surname;
    Object.defineProperty(user, 'surname', {
	get: function() {
	    console.log('The property surname  was called');
	    return surname;
    	},
    	set: function(value) {
      	    surname = value;
      	    console.log('The property student  was changed');
    	}
    });
}

check(user);

alert(user.surname);

user.surname = 1231;

alert(user.surname);
