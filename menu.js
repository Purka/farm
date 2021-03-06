Menu = function() {	
	this.active_item = null;
	this.drawIndicators = function() {
		var code ='';
		code+='<span class="indicator money">Деньги: '+farm.getMoney()+'</span>'
		$.each(farm.storage.crops, function(name, value) {
			code += '<span class="indicator">'+name+": "+value+'</span>';
		});
		$(".indicators").html(code);
	};
	this.draw = function() {
		var active = this.active_item;
		var code = '';
		$.each(farm.storage.crops, function(resource, value) {
			var url = crops[resource].image;
			if(active == resource) {
				console.log(active + ' active')
				code += '<div data-crop="'+resource+'" class="resource active_menu '+resource+'"><span class="indicator_value">'+value+'</span></div>';
			} else {
					code += '<div data-crop="'+resource+'"  class="resource '+resource+'"><span class="indicator_value">'+value+'</span></div>';
			}			
		});
		$(".menu").html(code);
	};
	this.hide = function() {
		$('.menu').hide();
	};
	this.show = function() {
		$('.menu').show();
	};
};
menu = new Menu();