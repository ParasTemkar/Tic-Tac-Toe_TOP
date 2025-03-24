

function displayboard(){
    const display = document.getElementById("display");
    display.innerHTML = "";
  
    let board = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3']];
    board.forEach(row => row.forEach( square => {   
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute('id', square)

        display.appendChild(tile);
    }));
};


  window.onload = displayboard;
  

  