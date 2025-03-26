let player_1 = "X";  
let player_2 = "O";
let player = player_1;

const  displayboard = (function (){
    const display = document.getElementById("display");
    display.innerHTML = "";
  
    let board = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3']];
    board.forEach(row => row.forEach( square => {   
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute('id', square)
        
        tile.addEventListener("click",()=>{
            if (!tile.textContent) { 
                tile.textContent = player; 
                if (player === player_1) {
                    tile.innerHTML===player_1;
                    player = player_2;  
                } else {
                    tile.innerHTML===player_2;
                    player = player_1;  
                }
            } else {
                alert("Already taken");
            }
        });
        display.appendChild(tile);
    }));
}) () ;



  