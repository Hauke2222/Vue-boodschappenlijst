export default class Grocery {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price; 
        this.quantity = quantity;
    }
    get subTotal() {
        return parseFloat(this.price.replace(',', '.').slice(1)) * parseInt(this.quantity)
    }
}
