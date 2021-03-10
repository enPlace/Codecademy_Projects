class School {
	constructor(name, level, numberOfStudents){
		this._name = name; 
		this._level = level; 
		this._numberOfStudents = numberOfStudents
		if (level !== 'primary'&& level !== 'middle' && level !== 'high'){
			console.log("The school level input must be either 'primary', 'middle', or 'high'.")
		}
		if (typeof numberOfStudents != 'number'){
			console.log("The input for number of students must be a number.")
		}
		if (typeof numberOfStudents === 'number' && numberOfStudents%1 != 0){
			console.log("The input for the number of students must be a whole number.")
		}
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
		if (value !== 'primary'&& value !== 'middle' && value !== 'high'){
			console.log("The school level input must be either 'primary', 'middle', or 'high'.") 
	}else{
		this._level = value
	}
	}

	set numberOfStudents(value){
				if (typeof value != 'number'){
			console.log("The input for number of students must be a number.")
		}
		else if (typeof value=== 'number' && value %1 != 0){
			console.log("The input for the number of students must be a whole number.")

	}else {
		this._numberOfStudents = value
	}
	}
	quickFacts(){
		console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
	}

};



class Primary extends School{
	constructor(name, level, numberOfStudents){
	super(name, level, numberOfStudents);}
};
class Middle extends School{
	constructor(name, level, numberOfStudents){
	super(name, level, numberOfStudents);}
}
class High extends School{
	constructor(name, level, numberOfStudents){
	super(name, level, numberOfStudents); 
	this._sportsTeams = []
	}
	get sportsTeams(){
		return this._sportsTeams
	}
	set sportsTeams(value){
		this._sportsTeams = value
	}
	addSportsTeams(sport){
		if(Array.isArray(sport)){
			this.sportsTeams = [].concat(this.sportsTeams, sport)
		}else{
			this.sportsTeams.push(sport)
		}
	}

}
const newschool = new Primary('Ham', 'primary', 1)
console.log(newschool.level)
newschool.level = 'primary'
console.log(newschool.level)
newschool.numberOfStudents = 5
console.log(newschool.numberOfStudents)
newschool.quickFacts()

const franklinHigh= new High('Franklin High School', 'high', 2000)
franklinHigh.addSportsTeams('baseball')
console.log(franklinHigh.sportsTeams)
franklinHigh.addSportsTeams(['football', 'soccer', 'lacrosse', 'softball', 'volleyball'])
console.log(franklinHigh.sportsTeams)
franklinHigh.quickFacts()