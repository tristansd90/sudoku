const plateau = document.querySelector("#plateau");
const inputs = document.querySelectorAll("input");
let hasWon = false;

const sudoku = [
    [1, 0, 6, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 8, 2, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 0, 8, 0, 4, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 9, 1],
    [0, 0, 0, 2, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 1, 0, 0, 6, 0],
    [0, 4, 0, 0, 0, 0, 8, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// recuperer les valeurs du tableau js et les placer dans la table html
sudoku.forEach((row, numRow) => {
    row.forEach((column, numColumn) => {
        if (column == 0) {
            plateau.children[numRow].children[numColumn].firstChild.value = "";
        } else {
            plateau.children[numRow].children[numColumn].firstChild.value = column;
            plateau.children[numRow].children[numColumn].firstChild.disabled = true;
        }
    });
});

//verifier les valeurs entre 0 et 9
function checkValue() {
for (let i=0; i<inputs.length; i++)
    inputs[i].addEventListener("keyup", () => {
        if (inputs[i].value < 1 || inputs[i].value > 9) {
            console.log("error value")
            inputs[i].classList.add("error_value");
        } else {
            inputs[i].classList.remove("error_value");
        }
    })
};
checkValue()


// verifer les doublons
inputs.addEventListener()

    // const duplicate = new Set();
