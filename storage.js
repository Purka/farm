Storage = function() {
	this.crops = {
		'potato': 1,
		'banana': 1,
		'wheat' : 1,
		'cat' : 1
	};
	this.drawIndicators = function() {
		var code ='';
		$.each(this.crops, function(resource, value) {
			code += '<span class="indicator">'+resource+": "+value+'</span>';
		});
		$(".indicators").html(code);
	};
	this.drawMenu = function() {
		$.each(this.crops, function(resource, value) {
			var code = '';
			code += (value>0?'<img class="resource url =">'+value+'</span>':'');
			$(".menu").html(code);
		});
	}
}

