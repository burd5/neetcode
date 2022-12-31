/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

var isValidSudoku = function(board) {
  
    const set = new Set()
    
    
    //i rows, j columns
    //check valid columns and rows O(9*9)
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            const value = board[i][j]
            if(value !== "."){
                const rowString = `${value} at row ${i}`
                const colString = `${value} at col ${j}`
                const boxString = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`
                
                if(set.has(rowString) || set.has(colString) || set.has(boxString)){
                    return false
                }else{
                    set.add(rowString)
                    set.add(colString)
                    set.add(boxString)
                }
            }
        }
    }

    return true
    
};


const isValidSudoku = function(board){
    let set = new Set();
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
        if(value !== '.'){
            let value = board[i][j];
            let rowStr = `${value} at row ${i}`;
            let colStr = `${value} at column ${j}`
            let boxStr = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`

            if(set.has(rowStr) || set.has(colStr) || set.has(boxStr)) return false
            else {
                set.add(rowStr)
                set.add(colStr)
                set.add(boxStr)
            }
        }}
    }

    return true;
}