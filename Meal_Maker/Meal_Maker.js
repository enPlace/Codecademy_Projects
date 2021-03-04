const menu = {
  _courses: {
    appetizers: ['some'], 
    mains: ['stuff'], 
    desserts: ['is great']
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
  set desserts (dessserts){
    this._courses.desserts = desserts
  }
}



console.log(menu.courses)

