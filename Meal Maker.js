//Using JavaScript to randomly create a three-course meal based on what is available on a menu
const menu = {
    _courses: {
    appetizers: [],
    mains: [],
    desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    get desserts() {
      return this._courses.mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
    }
  };
  
  //Creating a menu object
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Soup', 4.00);
  menu.addDishToCourse('appetizers', 'Waffles', 3.25);
  menu.addDishToCourse('mains', 'Jollof', 6.25);
  menu.addDishToCourse('mains', 'Rice', 6.00);
  menu.addDishToCourse('mains', 'Banku', 5.25);
  menu.addDishToCourse('desserts', 'Gari', 4.50);
  menu.addDishToCourse('desserts', 'Cerelac', 3.75);
  menu.addDishToCourse('desserts', 'Tomato', 5.00);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);