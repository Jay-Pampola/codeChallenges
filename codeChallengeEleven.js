const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (typeof this._meal === 'string' && typeof this._price === 'number') {
            return `“Today's Special is ${this._meal} with Egg for ${this._price}Php!”`;
        } else {
            return 'Meal or price was not set correctly!'
        }
    }
};

menu.meal = 'LOMI';
menu.price = 45;

console.log(menu);
console.log(menu.todaysSpecial)