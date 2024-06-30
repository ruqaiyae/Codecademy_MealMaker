const mealItems = ['Burger', 'Pizza', 'Pasta', 'Fish and Chips', 'Curry and Rice', 'Sichuan Noodles']

const priceOfItems = [6, 7, 8, 10, 9, 12]

const randomMeal = mealArr => {
  const randomMealIndex = Math.floor(Math.random() * mealArr.length);
  const randomMealItem = mealArr[randomMealIndex];
  return randomMealItem;
};

const randomPrice = priceArr => {
  const randomPriceIndex = Math.floor(Math.random() * priceArr.length);
  const randomPriceItem = priceArr[randomPriceIndex];
  return randomPriceItem;
};

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
      return this._price = priceToCheck
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return 'Today\'s special is ' + this._meal + ' for $' + this._price + '!'
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
};

// randomMeal(mealItems);
// randomPrice(priceOfItems);


menu.meal = randomMeal(mealItems);
menu.price = randomPrice(priceOfItems);

console.log(menu.todaysSpecial);
