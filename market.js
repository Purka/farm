Market = function(shops) {
	this.shops = shops;
	this.addShop = function(shop) {
		this.shops.push(shop);
	};
	this.getCode = function() {
		var code = '';
		code +='<div class="market"><button onclick="market.exit()" class="exit_market">Закрыть</button>';
		this.shops.forEach(function(shop, index){
			code += shop.getCode();
		})
		code += '</div>';
		return code;
	}
	this.draw = function() {
		$('.main').html(this.getCode())
	};
	this.enter = function() {
		menu.hide();
		this.draw();
	};
	this.exit = function () {
		farm.draw();
		menu.show();
		menu.draw();
	}
};
Shop = function(name, crops_list, prices_factors, difference_factor) {
	this.name = name;
	this.open_in_market = false;
	this.prices_factors = prices_factors;
	this.difference_factor = difference_factor;
	this.storage = new Storage(crops_list);
	this.addjustPrice = function(price_name, factor) {
		this.prices_factors[price_name] *= factor;
	};
	this.getPrice = function(item_name) {
		if (this.prices_factors[item_name]) {
			return crops[item_name].getPrice()*this.prices_factors[item_name];
		} else {
			return undefined;
		}
	};
	this.buy = function(item_name, quantity) {
		if (farm.decreaseMoney(this.getPrice(item_name) * quantity * this.difference_factor)) {
			if (this.storage.take(item_name, quantity)) {				
				farm.storage.put(item_name, quantity);
				menu.drawIndicators();
				this.draw();
			} else {
				alert('В магазине недостаточно товара')
			};
		} else {
			alert('На ферме недостаточно денег');
		};
	};
	this.sell = function (item_name, quantity) {
		console.log('Sell item: '+item_name+', '+quantity)
		if (farm.storage.take(item_name, quantity)) {
			this.storage.put(item_name, quantity);
			farm.increaseMoney(crops[item_name].price * this.prices_factors[item_name] * quantity);
			menu.drawIndicators();
			this.draw();
		} else {
			alert('На ферме недостаточно товара');
		};
	};
	this.getCode = function () {
		var code = '';
		var storage = this.storage;
		code += '<div class="shop" data-id="'+market.shops.indexOf(this)+'">';
		code += '<span class="shop_name">Название: '+this.name+'</span><br><span class="factor">Коэффициент покупки/продажи: '+this.difference_factor+'</span>';
		if (this.open_in_market) {
			var prices = this.prices_factors;
			var difference_factor = this.difference_factor;
			$.each(this.storage.crops, function(crop, value) {
				var sell_price = crops[crop].price*prices[crop];
				var buy_price = sell_price*difference_factor;
				code += '<div class="shop_item" data-item="'+crop+'"><span class="buy_price">'+buy_price+'</span><img class="shop_item_image" src="'+crops[crop].image+'"></img><span class="sell_price">'+sell_price+'</span><span class="shop_item_panel"><button class="buy_button">Купить</button><input type="number" value=0 class="shop_item_counter" min=0 max='+storage.crops[crop]+'></input><button class="sell_button">Продать</button></span></div>'
			});
		} else {

		}
		code += '</div>';
		return code;
	};
	this.draw = function() {
		menu.hide();
		$('.shop[data-id='+market.shops.indexOf(this)+']').replaceWith(this.getCode());
	}
};
test_shop = new Shop(
	'Ферма Джона',
	{
		'potato' : 15,
		'wheat' : 10,
		'banana' : 30,
		'cat' : 1
	}, 
	{
		'potato' : 1.0,
		'wheat' : 1.0,
		'banana' : 1.0,
		'cat' : 1.0
	}, 2);
test_shop2 = new Shop(
	'Ферма Френка',
	{
		'potato' : 15,
		'wheat' : 10,
		'banana' : 30,
		'cat' : 1
	}, 
	{
		'potato' : 2.0,
		'wheat' : 1.0,
		'banana' : 1.0,
		'cat' : 1.0
	}, 3);
test_shop3 = new Shop(
	'Ферма Стэна',
	{
		'potato' : 15,
		'wheat' : 10,
		'banana' : 30,
		'cat' : 1
	}, 
	{
		'potato' : 1.0,
		'wheat' : 1.0,
		'banana' : 1.0,
		'cat' : 1.0
	}, 1.5);
market = new Market([test_shop, test_shop2, test_shop3]);