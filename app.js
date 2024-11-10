// Sudoku solver

const checkBoard = (board) => {
  return checkAllColumns(board) && checkAllRows(board);
};

const checkAllRows = (grid) => {
  let isValidRow = true;

  grid.forEach((row) => {
    if (checkRow(row)) {
    } else {
      isValidRow = false;
      return;
    }
  });
  return isValidRow;
};

const checkAllColumns = (grid) => {
  let isValidColumn = true;

  grid.forEach((row, index) => {
    if (checkColumn(grid, index)) {
    } else {
      isValidColumn = false;
      return;
    }
  });
  return isValidColumn;
};

const checkRow = (row) => {
  let isValidRow;

  const rowMap = new Map();

  row.forEach((value, index) => {
    if (rowMap.has(value)) {
      isValidRow = false;
    } else if (value > row.length || value <= 0) {
      isValidRow = false;
    } else {
      rowMap.set(value, index);
      isValidRow = true;
    }
  });

  return isValidRow;
};

const checkColumn = (grid, index) => {
  let isValidColumn;

  const columnMap = new Map();

  grid.forEach((column, colIndex) => {
    if (columnMap.has(column[index])) {
      isValidColumn = false;
    } else if (column[index] > grid.length || column[index] <= 0) {
      isValidColumn = false;
    } else {
      columnMap.set(column[index], colIndex);
      if (isValidColumn !== false) {
        isValidColumn = true;
      }
    }
  });
  return isValidColumn;
};

//Test data:
const grid1 = [[1, 2, -3]];
const grid2 = [[1, 2, 3]];
const grid3 = [[1, 5, 3]];
const grid4 = [
  [1, 2],
  [2, 1],
];
const grid5 = [
  [2, 1, 3],
  [3, 2, 1],
  [1, 3, 2],
];

console.log(checkBoard(grid5));
