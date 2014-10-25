Menu = function() {	
	this.active_item = null;
	this.drawIndicators = function() {
		var code ='';
		$.each(storage.crops, function(name, value) {
			code += '<span class="indicator">'+name+": "+value+'</span>';
		});
		$(".indicators").html(code);
	};
	this.draw = function() {
		var code = '';
		$.each(storage.crops, function(resource, value) {
			var url = crops[resource].image;
			code += '<div data-crop="'+resource+'" class="resource"><img src ="'+url+'"></img><span class="indicator_value">'+value+'</span></div>';			
		});
		$(".menu").html(code);
	}
};
menu = new Menu();