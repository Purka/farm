Cell = function(x, y) {
	this.crop = null;
	this.x = x;
	this.y = y;

	this.plant = function(crop) {
		this.crop = crop;
		console.log("Высадили "+this.crop.name);
		this.crop.cell = this;
		this.crop.grow();
	};
	this.harvest = function() {
		this.crop = null;
	};
	this.getCode = function() {
		return '<div data-x='+this.x+' data-y='+this.y+' class="cell">'+'('+this.x+';'+this.y+')'+(this.crop ? this.crop.getCode() : 'Пусто')+'</div>'
	}
};

