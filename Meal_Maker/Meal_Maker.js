const menu = {
  _courses: {
    appetizers: {}, 
    mains: {}, 
    desserts: {}
  },
  get courses(){
    return{
      appetizers: this.appetizers, 
      mains: this.mains, 
      desserts: this.desserts
    }
  }, 
  get appetizers(){

  }, 
  set appetizer(appetizerIn){
    
  },
}