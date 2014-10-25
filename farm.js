Farm = function(x, y) {
	this.x = x;
	this.y = y;
	this.cells = [];
	
	for(var height = 0; height < this.y; height++) {
		this.cells[height] = [];
		for(var width = 0; width < this.x; width++) {
			this.cells[height].push(new Cell(height, width))
		}
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
		console.log('farm draw')
		$(".main").html(this.getCode());
	}
}

farm = new Farm(2,2);
farm.draw();
menu.drawIndicators();
menu.draw();
