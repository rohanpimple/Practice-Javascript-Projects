let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll(".reset");

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
box.addEventListener("click", () => {
if(turn0) {
box.innerText = "O";
turn0 = false;
} else {
    box.innerText = "X";  
    turn0 = true;
}
box.disabled = true;
});
});
