class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

const breakfast = new Breakfast("doritos", "water")

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  #desert;
  constructor(salad, soup, entree, desert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#desert = desert;
  }
}