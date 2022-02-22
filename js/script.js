const plateau = document.querySelector("#plateau");
const inputElts = document.querySelectorAll("input");
const btnchecked = document.querySelector("#checked");
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



// initialiser le tableau html avec les valeurs du tableau sudoku ----------
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

function verifier() {

    for (let i = 0; i < inputElts.length; i++) {
        inputElts[i].addEventListener("keyup", () => {
            if (inputElts[i].value < 1 || inputElts[i].value > 9) {
                inputElts[i].classList.add("error_value");
            } else {
                inputElts[i].classList.remove("error_value");
            };
        })
    };

    sudoku.forEach((row, numRow) => {
        row.forEach((column, numColumn) => {
            plateau.children[numRow].children[numColumn].firstChild.addEventListener("keyup", (e) => {
                if (e.key === "Enter") {
                    console.log(sudoku);
                    sudoku[numRow][numColumn] = parseInt(plateau.children[numRow].children[numColumn].firstChild.value);
                }
            })
        });
    });
};

verifier();


// for (let i = 0; i < sudoku.length; i++) {
//     for (let j = 0; j < sudoku.length; j++) {
//         if (sudoku[i][j] == value) {
//         }
//     }
// };