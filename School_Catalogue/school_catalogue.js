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

}
const newschool = new School('Ham', 'primary', 1)