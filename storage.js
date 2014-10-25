Storage = function() {
	this.crops = {
		'potato': 1,
		'banana': 1,
		'wheat' : 1,
		'cat' : 1
	};
	this.drawIndicators = function() {
		var code ='';
		$.each(this.crops, function(name, value) {
			code += '<span class="indicator">'+name+": "+value+'</span>';
		});
		$(".indicators").html(code);
	};
	this.drawMenu = function() {
		var code = '';
		$.each(this.crops, function(resource, value) {
			var url = crops[resource].image;
			code += '<div class="resource"><img src ="'+url+'"></img><span class="indicator_value">'+value+'</span></div>';			
		});
		$(".menu").html(code);
	}
};
storage = new Storage();

