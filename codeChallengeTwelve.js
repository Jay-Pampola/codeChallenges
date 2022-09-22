const team = {
    _players: [
        player1 = {
            firstName: 'Petter',
            lastName: 'Rabbit',
            age: 60
        },
        player2 = {
            firstName: 'Jerry',
            lastName: 'Mouse',
            age: 58
        },
        player3 = {
            firstName: 'Tom',
            lastName: 'Cat',
            age: 71
        },
    ],
    _games: [
        game1 = {
            opponent: 'Shohoku High School',
            teamPoints: 95,
            opponentPoints: 61,
        },
        game2 = {
            opponent: 'Aiwa Gakuen High School',
            teamPoints: 83,
            opponentPoints: 82,
        },
        game3 = {
            opponent: 'Shoyo High School',
            teamPoints: 78,
            opponentPoints: 80,
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this._games.push(game);
    }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
team.addPlayer('Daffy', 'Duck', 45);
team.addGame('Riverdale', 90, 92);

console.log(team._players);
console.log(team._games);
//console.log(team);