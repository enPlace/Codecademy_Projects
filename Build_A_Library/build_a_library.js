class Media {
	constructor(title){
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = []
	}
	get title(){
		return this._title
	}
	get isCheckedOut (){
		return this._isCheckedOut
	}
	get ratings (){
		return this._ratings
	}
	set isCheckedOut(boolean){
		this._isCheckedOut = boolean
	}
	toggleCheckedOutStatus (){
		this.isCheckedOut = !this.isCheckedOut
		}
	
	getAverageRating(){
		let sumRating = this.ratings.reduce((accumulator, currentValue)=> accumulator+currentValue); 
		return sumRating / this.ratings.length;

	}
	addRating(rating){
		this.ratings.push(rating)
	}
}

class Book extends Media{
	constructor(author, title, pages){
		super(title)
		this._author = author; 
		this._pages = pages
	}
	get author(){
		return this._author
	}
	get pages(){
		return this._pages
	}
}


class Movie extends Media{
	constructor(director, title, runTime){
		super(title); 
		this._director = director; 
		this._runTime = runTime
	}
	get director(){
		return this._director
	}
	get runTime(){
		return this.runTime
	}
}

class CD extends Media{
	constructor(artist, title){
		super(title); 
		this._artist = artist; 
		
	}

}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 
	544)

historyOfEverything.toggleCheckedOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())


const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckedOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())