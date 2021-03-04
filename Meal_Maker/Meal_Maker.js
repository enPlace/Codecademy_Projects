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
  }
}



console.log(menu.desserts)

