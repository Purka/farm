Cell = function(x, y) {
	this.crop = null;
	this.x = x;
	this.y = y;
	
	this.plant = function(crop) {
		if(this.crop || storage['potato'] <= 0){return null};
		this.crop = clone(crop);
		storage['potato']--;
		console.log("Высадили "+this.crop.name+' на '+this.x+';'+this.y);
		this.crop.cell = this;
		this.crop.grow();
	};
	this.harvest = function() {
		console.log('harvest')
		storage['potato'] +=3;
		console.log("Теперь у тебя " + storage['potato'] + " " + this.crop.name);
		delete this.crop;
		this.draw();
	};
	this.getCode = function() {
		return '<div data-x='+this.x+' data-y='+this.y+' class="cell">'+'('+this.x+';'+this.y+')'+(this.crop ? this.crop.getCode() : 'Пусто')+'</div>'
	};
	this.draw = function() {
		$('[data-x='+this.x+'][data-y='+this.y+']').html(this.getCode());
	};
};

