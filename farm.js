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
	this.getCode = function() {
		var code = '<div class="farm">';
		this.cells.forEach(function(row, index) {
			code += '<div class="row">';
			row.forEach(function(cell, index) {
				code += cell.getCode();
			});
			code += '</div>';
		});
		code += '</div>';
		return code;
	};
	this.draw = function() {
		$(".main").html(this.getCode());
	}
}

farm = new Farm(5,4);
farm.draw();