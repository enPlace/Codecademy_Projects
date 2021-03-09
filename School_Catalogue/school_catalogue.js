class School {
	constructor(name, level, numberOfStudents){
		this._name = name; 
		this._level = level; 
		this._numberOfStudents = numberOfStudents
		if (level !== 'primary'&& level !== 'middle' && level !== 'high'){
			console.log("The school level input must be either 'primary', 'middle', or 'high'.")
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

