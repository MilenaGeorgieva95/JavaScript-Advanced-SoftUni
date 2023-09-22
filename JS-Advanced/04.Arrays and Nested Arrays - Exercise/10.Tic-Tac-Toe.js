function ticTacToe(data) {
    let isGameOver = false;
    let winner = ''
    let dashboard = [['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']]

    movesArr = data.map(el => el.split(' ').map(Number));
    let counter = 0;

    for (let i = 0; i < movesArr.length; i++) {
        let move = movesArr[i]

        if (dashboard[move[0]][move[1]] !== 'false') {
            console.log("This place is already taken. Please choose another!");
        } else {

            if (counter % 2 === 0) {
                dashboard[move[0]][move[1]] = 'X'
            } else {
                dashboard[move[0]][move[1]] = 'O'
            }
            counter++;

            for (let k = 0; k < 3; k++) {
                if (dashboard[k][0] !== 'false' && dashboard[k][0] === dashboard[k][1] && dashboard[k][0] === dashboard[k][2]) {
                    isGameOver = true;
                    winner = dashboard[k][0]
                }

                if (dashboard[0][k] !== 'false' && dashboard[0][k] === dashboard[1][k] && dashboard[0][k] === dashboard[2][k]) {
                    isGameOver = true;
                    winner = dashboard[0][k]
                }

                if (dashboard[0][0] !== 'false' && dashboard[0][0] === dashboard[1][1] && dashboard[0][0] === dashboard[2][2]) {
                    isGameOver = true;
                    winner = dashboard[0][0]
                }

                if (dashboard[0][2] !== 'false' && dashboard[0][2] === dashboard[1][1] && dashboard[0][2] === dashboard[2][0]) {
                    isGameOver = true;
                    winner = dashboard[0][2]
                }

                if (isGameOver) {
                    console.log(`Player ${winner} wins!`)
                    dashboard.forEach(el => console.log(el.join('\t')))
                    return;
                }
                if (counter === 9) {
                    console.log("The game ended! Nobody wins :(");
                    dashboard.forEach(el => console.log(el.join('\t')))
                    return;
                }
            }
        }
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"])