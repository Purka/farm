Cell = function() {
	this.crop = null;
	this.stage = 0;

	this.plant = function(crop) {
		console.log("Высадили "+crop);
		this.crop = crop;
		this.grow();
	}
	this.grow = function() {
		this.stage++;
		console.log(this);
		console.log("стадия роста - "+this.stage)
		if (this.stage >= 4) {
			console.log(this.crop+" вырос и собран");
			this.harvest();
		} else {
			var cell = this;
			setTimeoutSecond(function(){cell.grow()}, 5);
		}
	}
	this.harvest = function() {
		this.crop = null;
		this.stage = 0;
	}
};

test_cell = new Cell();
<<<<<<< HEAD
test_cell.plant('картоха')
=======
test_cell.plant('картоха')

>>>>>>> miow
