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
