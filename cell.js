Cell = function() {
	this.crop = null;

	this.plant = function(crop) {
		this.crop = crop;
		console.log("Высадили "+this.crop.name);
		this.crop.cell = this;
		this.crop.grow();
	}
	this.harvest = function() {
		this.crop = null;
	}
	console.log(this)
};

test = new Cell()
test.plant(cat)