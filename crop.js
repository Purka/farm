Crop = function(name, image){
	this.stage = 0;
	this.name = name;
	this.cell = null;
	this.image = image;	
	
	this.grow = function() {
		this.stage++;
		this.cell.draw();
		console.log("стадия роста - " + this.stage);
		if(this.stage >= 4) {
			console.log(this.name + " вырос и собран");
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

var potato = new Crop('potato', 'http://fermaspb.ru/uploads/.thumbs/images/goods/res-4d43b90e63868.jpg')
var banana = new Crop('banana', 'http://www.pl.all.biz/img/pl/catalog/middle/199459.jpeg?rrr=1')
var wheat = new Crop('wheat', 'http://images.tomas.by/i/firms/49/23/23585/pshenica-dlya-prorashchivaniya-0-5-kg_074050d285145c0_100x100.jpg')
var cat = new Crop('cat', 'http://img-fotki.yandex.ru/get/9317/27433797.89/0_8d647_1716eb7d_-1-orig')

