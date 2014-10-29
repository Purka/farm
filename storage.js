Storage = function(crops) {
	this.crops = crops;
	this.increase = function(crop_name, quantity) {
		var quantity = parseInt(quantity);
		this.crops[crop_name] = parseInt(this.crops[crop_name]);
		return this.crops[crop_name] = (this.crops[crop_name] ? this.crops[crop_name]+quantity : quantity);
	}; 
	this.decrease = function(crop_name, quantity) {
		this.crops[crop_name] = parseInt(this.crops[crop_name]);
		return this.crops[crop_name] -= quantity;
	};
	this.take = function(crop_name, quantity) {
		if(this.crops[crop_name]-quantity>=0) {
			this.decrease(crop_name, quantity);
		} else {
			alert('Недостаточно ресурса на складе')
			return undefined;
		}	
		return true;
	};
	this.put = function(crop_name, quantity) {
		this.increase(crop_name, quantity);
		menu.drawIndicators();
		menu.draw();
		return true;
	};
};

