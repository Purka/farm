Farm = function(x, y, crops, money) {
	this.x = x;
	this.isSquare = true;
	this.y = y;
	this.cells = [];
	this.money = money;
	this.storage = new Storage(crops);
	
	for(var height = 0; height < this.y; height++) {
		this.cells[height] = [];
		for(var width = 0; width < this.x; width++) {
			this.cells[height].push(new Cell(height, width))
		}
	};
	this.getMoney = function() {
		return this.money;
	}
	this.isRectangle = function() {
		return !!(this.cells[this.cells.length-1][this.x-1]);
	}
	this.addCell = function() {
		if(this.isRectangle()) {
			console.log('farm is rectangle');
			if (this.x==this.y) {
				console.log('it is square');				
				this.x++;
				this.cells[0].push(new Cell(0, this.x-1));
			} else {
				this.y++;
				console.log('it isnt square');
				this.cells.push([new Cell(this.y-1, 0)]);
			}
		} else {
			console.log('farm isnt rectangle');
			var marker = true;
			var width = this.x;
			var cells = this.cells;
			this.cells.forEach(function(row, index, cells) {
				if(row.length<width && marker) {
					console.log('farm isnt rectangle, adding cell in '+index+' row')
					marker = false;
					row.push(new Cell(index, row.length));
				};
			})
		}
		farm.draw();
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
	this.getCellAddButtonCode = function() {
		return '<button class="add_cell_button" onclick="farm.addCell()">Добавить клетку</button>';
	};
	this.getMarketEnterButton = function() {
		return '<button class="enter_market_button" onclick="market.enter()">Рынок</button>';
	};
	this.draw = function() {
		console.log('farm draw')
		$(".main").html(this.getCode()+this.getCellAddButtonCode()+this.getMarketEnterButton());
	};
	this.increaseMoney = function(amount) {
		console.log('Increase money: ' + this.money + ' + ' + amount);
		this.money+=amount;
	};
	this.decreaseMoney = function(amount) {
		console.log('Decrease money: ' + this.money + ' - ' + amount);
		return((this.money - amount) >=0 ? !!((this.money -= amount)>=0) : false);
	};
};

