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
// --------------------------------------------------------------------------



function verifier() {

    // verifie les valeurs de 1 à 9 
    inputElts.forEach(input => {
        const inputValide = input.checkValidity(); 
        // console.log(inputValide);
        if (inputValide === false) return
    });
    // -------------------- 
    // for (let i = 0; i < inputElts.length; i++) {
    //     inputElts[i].addEventListener("keyup", () => {
    //         if (inputElts[i].value < 1 || inputElts[i].value > 9) {
    //             inputElts[i].classList.add("error_value");
    //         } else {
    //             inputElts[i].classList.remove("error_value");
    //         };
    //     })
    // };
    //------------------------------------------------------------------------------------

    // for (let row = 0; row < 9; row++) {
    //     // console.log(row);
    //     for (let column = 0; column < 9; column++) {
    //         const identifiant = "case" + row + "-" + column;
    //         // console.log(identifiant);
    //         const input = document.getElementById(identifiant);
    //         const valeur = input.value;
    //         const nombre = valeur === "" ? "" : parseInt(valeur, 10); 
    //     }
    // };  
    // ------------------------
    sudoku.forEach((row, numRow) => {
        row.forEach((column, numColumn) => {
            plateau.children[numRow].children[numColumn].firstChild.addEventListener("keyup", (e) => {
                if (e.key === "Enter") {
                    console.log(sudoku);
                    sudoku[numRow][numColumn] = parseInt(plateau.children[numRow].children[numColumn].firstChild.value);

                    const identifiant = "case" + row + "-" + column;
                    console.log(identifiant);
                    const input = document.getElementById(identifiant);
                    // const valeur = input.value;
                    const valeur = plateau.children[numRow].children[numColumn].firstChild.value;
                    const nombre = valeur === "" ? "" : parseInt(valeur, 10); 
                }
            })
        });
    });
};
btnchecked.addEventListener("click", verifier());



// for (let i = 0; i < sudoku.length; i++) {
//     for (let j = 0; j < sudoku.length; j++) {
//         if (sudoku[i][j] == value) {
//         }
//     }
// };  




//------- CHECKED DOUBLE VALUES -----------------
    //for (let row = 0; row < 9; row++) {
        // const liste = new Set();
        //for (let column = 0; column < 9; column++) {
            // const valeur = sudoku[row][column];
            // console.log(valeur);
            // if (valeur === 0) {

            // } else {
            //     const valeurExiste = liste.has(valeur)
            //     if (valeurExiste) {
            //         console.log("doublons", row, "-", column);
            //     } else {
            //         liste.add(valeur);
            //     }
            // }
        //};
    //};
