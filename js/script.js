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

// 
function isRowOk(value, rowNumber) {
    inputElts[i].addEventListener("keyup", () => {
        if (plateau.children[i].children[rowNumber].firstChild.value == value) {
            console.log("doublon");
        }
    })
};

// initialiser le tableau html avec les valeurs du tableau sudoku ----------
sudoku.forEach((row, rowNumber) => {
    row.forEach((column, columnNumber) => {
        if (column == 0) {
            plateau.children[rowNumber].children[columnNumber].firstChild.value = "";
        } else {
            plateau.children[rowNumber].children[columnNumber].firstChild.value = column;
            plateau.children[rowNumber].children[columnNumber].firstChild.disabled = true;
        }
    });
});

function checkValue(value, r) {
    for (let i = 0; i < inputElts.length; i++) {
        inputElts[i].addEventListener("keyup", () => {
            if (inputElts[i].value < 1 || inputElts[i].value > 9) {
                inputElts[i].classList.add("error_value");
            } else {
                inputElts[i].classList.remove("error_value");
            };
            isRowOk(value, rowNumber);
        })
    };

    sudoku.forEach((row, rowNumber) => {
        row.forEach((column, columnNumber) => {
            plateau.children[rowNumber].children[columnNumber].firstChild.addEventListener("keyup", (e) => {
                if (e.key === "Enter") {
                    console.log(sudoku);
                    sudoku[rowNumber][columnNumber] = parseInt(plateau.children[rowNumber].children[columnNumber].firstChild.value);
                }
            })
        });
    });
};
checkValue();