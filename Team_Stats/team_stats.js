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

	_games: [{
			opponent: 'Milwaukee Bucks',
			opponentPoints: 112, 
			teamPoints: 111, 

		}, 
		{
			opponent: 'Washington Wizards', 
			opponentPoints: 111,
			teamPoints: 125
		}, 
		{
			opponent: 'Houston Rockets', 
			opponentPoints: 84, 
			teamPoints: 133
		}
	],

	get games(){
		return this._games
	}, 
	get players(){
		return this._players
	}, 
	get name(){
		return this._name
	},
	addPlayer(firstName, lastName, age){
		const player = {
			firstName: firstName, 
			lastName: lastName, 
			age: age
		}; 
		return this._players.push(player)
	}, 
	addGame (opponent, opponentPoints, teamPoints) {
		const game = {
			opponent: opponent, 
			opponentPoints: opponentPoints, 
			teamPoints: teamPoints
		};
		return this._games.push(game)
	}
}
team.addGame ('Los Angeles Clippers', 119, 99)
console.log(team.games)
team.addPlayer('Kyle', 'Anderson', 27)
console.log(team.players)
console.log(team.name)