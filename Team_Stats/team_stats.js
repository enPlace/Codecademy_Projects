const team = {
	_name: 'Memphis Grizzlies',
	_players: [
		{
			firstName: 'Ja',
			lastName: 'Morant',
			age: 21

		},
		{
			firstName: 'Jonas', 
			lastName: 'Valančiūnas',
			age: 28
		},
		{
			firstName: 'Dillon',
			lastName: 'Brooks',
			age: 25
		}, 
	], 

	_games: {
		game1:{
			opponent: 'Milwaukee Bucks',
			opponentPoints: 112, 
			teamPoints: 111, 

		}, 
		game2: {
			opponent: 'Washington Wizards', 
			opponentPoints: 111,
			teamPoints: 125
		}, 
		game3: {
			opponent: 'Houston Rockets', 
			opponentPoints: 84, 
			teamPoints: 133
		}

	}, 
	get games(){
		return this._games
	}, 
	get players(){
		return this._players
	}, 
	addPlayer(firstName, lastName, age){
		const player = {
			firstName: firstName, 
			lastName: lastName, 
			age: age
		}; 
		return this._players.push(player)
	}
}

console.log(team.games)
team.addPlayer('Kyle', 'Anderson', 27)
console.log(team.players)