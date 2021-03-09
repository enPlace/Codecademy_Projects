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
}

class Book extends Media{
	constructor(title){
		super(title)
	}
}
const Harry = new Book('Harry')
console.log(Harry.isCheckedOut)
Harry.toggleCheckedOutStatus()
console.log(Harry.isCheckedOut)
Harry.toggleCheckedOutStatus()
console.log(Harry.isCheckedOut)
Harry.toggleCheckedOutStatus()
console.log(Harry.isCheckedOut)