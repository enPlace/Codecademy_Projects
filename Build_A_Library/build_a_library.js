class Media {
	constructor(title){
		this._title = title
		this._isCheckedOut = false
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
		if (this._isCheckedOut ===true){
			this._isCheckedOut = false;
		}
		if (this._isCheckedOut === false){
			this._isCheckedOut = true
		}
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