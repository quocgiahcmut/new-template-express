class ProductDto {
	id;
	name;
	price;

	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.price = data.price;
	}
}

module.exports = ProductDto;
