Crop = function(name){
	this.stage = 0;
	this.name = name;
	this.cell = null;
	
	this.grow = function() {
		this.stage++;
		this.cell.draw();
		console.log("стадия роста - "+this.stage);
		if(this.stage >= 4) {
			console.log(this.name+" вырос и собран");
			this.cell.harvest();
		} else {
			var cell = this;
			setTimeoutSecond(function(){cell.grow()}, 1);
		};
	};

	this.getCode = function() { 
		return (this.name + " " + this.stage);
	}

}

var potato = new Crop('картоха')
var banana = new Crop('бананы')
var wheat = new Crop('пшеница')
var cat = new Crop('кот')

