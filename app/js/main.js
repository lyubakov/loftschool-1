$(document).ready(function () {	
	$('input, textarea').placeholder();
})

$('#laInput').change(function(e){
	var laVal = $(this).val().split('\\').slice(-1);
  	$('#laClone').val(laVal)
});