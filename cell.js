Cell = function(x, y) {
	this.crop = null;
	this.x = x;
	this.y = y;
	
	this.plant = function(crop) {
		console.log(crop)
		if(this.crop || farm.storage.crops[crop.name] <= 0){return null};
		this.crop = clone(crop);
		farm.storage.crops[crop.name]--;
		console.log("Высадили " + this.crop.name + ' на ' + this.x + ';' + this.y);
		this.crop.cell = this;
		this.crop.grow();
		menu.drawIndicators();
		menu.draw();
	};
	this.harvest = function() {
		console.log('harvest')
		farm.storage.crops[this.crop.name] +=3;
		console.log("Теперь у тебя " + farm.storage.crops[this.crop.name] + " " + this.crop.name);
		delete this.crop;
		this.draw();
		menu.drawIndicators();
		menu.draw();
	};
	this.getCode = function() {
		return '<div data-x=' + this.x + ' data-y=' + this.y + ' class="cell backgroundCell">' 
		+ '(' + this.x + ';' + this.y + ')' + (this.crop ? this.crop.name + " " + this.crop.stage : 'Пусто')+'</div>'
	};
	this.draw = function() {
		$('[data-x=' + this.x + '][data-y=' + this.y + ']').html(this.getCode());
	};
};

