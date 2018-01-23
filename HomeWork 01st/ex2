<script>
var newObj = {};
function copyObj(to,from) {
	for (key in from){
		if (typeof from[key] === 'object'){
			to[key] = {};
			copyObj(to[key],from[key]);
			} else
		{
		to[key] = from[key]; 
		}
	}	
}
</script>
