let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container.hide");
let msg = document.querySelector("#msg");
let turn0 = true; // player x player o

const winPattern = [
    [0, 1, 2], [1, 4, 7], [6, 7, 8],
    [0, 3, 6], [2, 4, 6], [2, 5, 8],
    [0, 4, 8], [3, 4, 5],
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        checkWin();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
    box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
}

const showWin = (Winner) => {
    msg.innerText = `Congratulations,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");

}

const checkWin = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner");
                showWin(pos1Val);
            }
        }
    }
}

newGamebtn.addEventListener("click", resetGame);
restbtn.addEventListener("click", resetGame);
