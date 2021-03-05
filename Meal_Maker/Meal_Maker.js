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
    const dishes = this._courses[courseType]; //gives us 
    const randomIndex = Math.floor(Math.random()* dishes.length); 
    return dishes[randomIndex]

  }
  

}



menu.addDishtoCourse('mains', 'pasta', '$3')
menu.addDishtoCourse('desserts', 'chocolate cake', '$3.40')
menu.addDishtoCourse('appetizers', 'amuse bouche', '$2.50')
menu.addDishtoCourse('mains', 'Veggie Burger', '$5')
menu.addDishtoCourse('desserts', 'Cheesecake', '$3.40')
menu.addDishtoCourse('appetizers', 'caviar', '$2.50')

console.log(menu.courses)