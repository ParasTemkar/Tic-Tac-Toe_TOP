let player_1 = [];
let player_2 = [];
let player = player_1;

const  displayboard = (function (){
    const display = document.getElementById("display");
    display.innerHTML = "";

    let board = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3']];
    board.forEach(row => row.forEach( square => {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute('id', square);

        tile.addEventListener("click",()=>{
            if (!tile.classList.contains("cross") && !tile.classList.contains("circle")) {
                if (player === player_1) {
                    player_1.push(square);
                    tile.classList.add("cross");
                    if (checkWin(player_1)) {
                        alert("Player 1 wins!");
                        return;
                    }
                    player = player_2;
                } else {
                    player_2.push(square);
                    tile.classList.add("circle");
                    if (checkWin(player_2)) {
                        alert("Player 2 wins!");
                        return;
                    }
                    player = player_1;
                }
            } else {
                alert("Already taken");
            }
        });

        display.appendChild(tile);
    }));
})();

function checkWin(playerSquares) {
    const winningPatterns = [
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
        ["a1", "b1", "c1"],
        ["a2", "b2", "c2"],
        ["a3", "b3", "c3"],
        ["a1", "b2", "c3"],
        ["a3", "b2", "c1"]
    ];

    return winningPatterns.some(pattern =>
        pattern.every(square => playerSquares.includes(square))
    );
}