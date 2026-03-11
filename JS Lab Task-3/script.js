const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell,index)=>{
    cell.addEventListener("click",()=>cellClick(index));
});

function cellClick(index){

    if(cells[index].textContent !== "" || !gameActive){
        return;
    }

    cells[index].textContent = currentPlayer;

    checkWinner();

    if(gameActive){
        if(currentPlayer === "X"){
            currentPlayer = "O";
        }else{
            currentPlayer = "X";
        }

        statusText.textContent = "Current Player: " + currentPlayer;
    }
}

function checkWinner(){

    for(let i=0;i<winPatterns.length;i++){

        let a = winPatterns[i][0];
        let b = winPatterns[i][1];
        let c = winPatterns[i][2];

        if(
            cells[a].textContent !== "" &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ){
            statusText.textContent = "Winner: " + currentPlayer;
            gameActive = false;

            cells[a].style.background="lightgreen";
            cells[b].style.background="lightgreen";
            cells[c].style.background="lightgreen";

            return;
        }
    }

    let draw = true;

    cells.forEach(cell=>{
        if(cell.textContent === ""){
            draw = false;
        }
    });

    if(draw){
        statusText.textContent = "It's a Draw!";
        gameActive = false;
    }
}

resetBtn.addEventListener("click",resetGame);

function resetGame(){

    cells.forEach(cell=>{
        cell.textContent="";
        cell.style.background="";
    });

    currentPlayer="X";
    gameActive=true;

    statusText.textContent="Current Player: X";
}
