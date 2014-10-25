Cell = function() {
	this.crop = null;

	this.plant = function(crop) {
		console.log("Высадили "+crop);
		this.crop = crop;
		this.crop.grow();
	}

};

test = new Cell()
test.plant(cat)