storage = {
		'potato': 1,
		'banana': 1,
		'wheat' : 1,
		'cat' : 1
};

draw_indicators = function() {
	var code ='';
	$.each(storage, function(resource, value) {
		code += '<span class="indicator">'+resource+": "+value+'</span>';
	})
	$(".indicators").html(code)
}
