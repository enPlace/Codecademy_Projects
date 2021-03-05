const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts:[]
  },
  get appetizers(){
    return this._courses.appetizers

  },
  get mains() {
    return this._courses.mains
  }, 
  get desserts(){
    return this._courses.desserts
  }, 
  get courses(){
    return this._courses
  }, 
  set appetizers (appetizers){
    this._courses.appetizers = appetizers
  }, 
  set mains (mains){
    this._courses.mains = mains
  }, 
  set desserts (desserts){
    this._courses.desserts = desserts
  },
   addDishtoCourse(courseType, dishName, dishPrice){ 
    const dish ={
      name: dishName, 
      price: dishPrice
    };
    return this._courses[courseType].push(dish)

  },
  getRandomDishFromCourse(courseType){    
    const dishes = this._courses[courseType]; //gives us array of dishes from a given course
    const randomIndex = Math.floor(Math.random()* dishes.length); //random index for the length of array
    return dishes[randomIndex] //returns a random dish from course 

  }, 
  generateRandomMeal(){ // generates a random meal with prices for each and a message.
    randomApp = menu.getRandomDishFromCourse('appetizers')
    randomMain = menu.getRandomDishFromCourse('mains')
    randomDessert= menu.getRandomDishFromCourse('desserts')
    totalPrice = randomApp.price + randomMain.price + randomDessert.price
    return `Welcome to RandomMeals, where you eat what fate tells you! 
    Your random appetizer: ${randomApp.name} ($${randomApp.price}).
    Your random main course: ${randomMain.name} ($${randomMain.price}). 
    Your random dessert: ${randomDessert.name} ($${randomDessert.price}).
    We hope you like your meal, but if you don't, you can't blame us! 
    Either way, you have to pay, and your total comes to $${totalPrice}.`
  

}
} 



menu.addDishtoCourse('mains', 'pasta', 3.00)
menu.addDishtoCourse('desserts', 'chocolate cake', 3.40)
menu.addDishtoCourse('appetizers', 'amuse bouche', 2.50)
menu.addDishtoCourse('mains', 'Veggie Burger', 5.00)
menu.addDishtoCourse('desserts', 'Cheesecake', 3.40)
menu.addDishtoCourse('appetizers', 'caviar', 2.50)

menu.addDishtoCourse('mains', 'enchilladas', 7.00)
menu.addDishtoCourse('desserts', 'crème brûlée', 4.30)
menu.addDishtoCourse('appetizers', 'gyoza', 4.50)
menu.addDishtoCourse('mains', 'ramen', 7.00)
menu.addDishtoCourse('desserts', 'ice cream', 3.70)
menu.addDishtoCourse('appetizers', 'spicy edamame', 8.50)


console.log(menu.generateRandomMeal())