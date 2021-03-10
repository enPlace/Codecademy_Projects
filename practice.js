class School {
	constructor(name, level, numberOfStudents){
		this._name = name; 
		this._level = level; 
		this._numberOfStudents = numberOfStudents

	}
	get name(){
		return this._name
	}
	get level(){
		return this._level
	}
	get numberOfStudents(){
		return this._numberOfStudents
	}
	set level(value){
		this._level = value
	}
	set numberOfStudents(value){
		this._numberOfStudents = value
	}
	quickFacts(){
		console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`)
	}

};


class Primary extends School{
	constructor(name, level, numberOfStudents){
	super(name, level, numberOfStudents);}
}
class Middle extends School{
	constructor(name, level, numberOfStudents){
	super(name, level, numberOfStudents);}
}
class High extends School{
	constructor(name, level, numberOfStudents){
	super(name, level, numberOfStudents); 
	this._sportsTeams = []
	}

}
const newschool = new Primary('Ham', 'primary', 1)
console.log(newschool.level)
newschool.level = 'middle'
console.log(newschool.level)
newschool.numberOfStudents = 'test'
console.log(newschool.numberOfStudents)
newschool.quickFacts()