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

}


class Primary extends School{
	constructor(name, level, numberOfStudents)
	super(name);
	super(level);
	super(numberOfStudents)
}
class Middle extends School{
	constructor(name, level, numberOfStudents)
	super(name);
	super(level);
	super(numberOfStudents)
}
class High extends School{
	constructor(name, level, numberOfStudents)
	super(name);
	super(level);
	super(numberOfStudents); 
	this._sportsTeams = []

}
const newschool = new School('Ham', 'primary', 1)
console.log(newschool.level)
newschool.level = 'middle'
console.log(newschool.level)
newschool.numberOfStudents = 'test'
console.log(newschool.numberOfStudents)
