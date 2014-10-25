Farm = function(x, y) {
	this.x = x;
	this.y = y;
	this.cells = [];
	var row = [];
	for(var width = 0; width<this.x; width++) {
		row.push(new Cell());
	};
	for(var height = 0; height<this.y; height++) {
		this.cells.push(row);
	};
	this.addCell = function() {
		return this.cells.push(new Cell());
	}
}

farm = new Farm(2,2);