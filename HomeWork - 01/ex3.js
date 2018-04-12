<script>
	var arr = [];
	var obj = {};
	var obj2 = {};
	var i = 0;
	
	//creating array
	while(i!=100000){
		arr[i] = ''+(Math.round(Math.random()*100000));
		obj['qwerty' + i] = i;
		obj2[i] = ''+(Math.round(Math.random()*10000));
		i++;
		}

function arrForIn(arr) {
  for (var key in arr) arr[key]++;
}

function arrFor(arr) {
  for (var i = 0; i <100000; i++) arr[i]++;
}

function benchArr(f,arr) {
  var date = new Date();
  for (var i = 0; i < 200; i++) f(arr);
  return new Date() - date;
}

document.write( 'arr - for...in: ' + benchArr(arrForIn,arr) + 'мс' + '<br \/> ' + 'arr - for (...;...;...) {...}: ' + benchArr(arrFor,arr) + 'мс <br/><br/>' );
document.write( 'objRandom - for...in: ' + benchArr(arrForIn,obj2) + 'мс' + '<br \/> ' + 'arr - for (...;...;...) {...}: ' + benchArr(arrFor,obj2) + 'мс <br/><br/>' );
document.write( 'obj - for...in: ' + benchArr(arrForIn,obj) + 'мс' + '<br \/> ' + 'arr - for (...;...;...) {...}: ' + benchArr(arrFor,obj) + 'мс <br/><br/>' );

</script>
