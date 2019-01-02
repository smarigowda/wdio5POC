module.exports = class Page {
	constructor() {
		this.name = 'Santosh Marigowda'
	}

	getName() {
		return this.name;
	}

	printName(name) {
		console.log(name);
	}

	getName2(name) {
		console.log(this);
		this.printName(name)
		return this.getName();
	}
}
