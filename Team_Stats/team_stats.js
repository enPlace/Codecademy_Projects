const team = {
	_name: 'Memphis Grizzlies',
	_players: {
		'Point Guard':{
			firstName: 'Ja',
			lastName: 'Morant',
			age: 21

		},
		Center: {
			firstName: 'Jonas', 
			lastName: 'Valančiūnas',
			age: 28
		},
		'Shooting Guard' : {
			firstName: 'Dillon',
			lastName: 'Brooks',
			age: 25
		}


	},
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
	}
}
console.log(team.players['Point Guard'])
console.log(team.games)