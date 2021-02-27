// we will need a bidimensional array
// with cells

function gameOfLife(board) {
    const deepCopy = (arr) => {
        return JSON.parse(JSON.stringify(arr));
    };

    const isAlive = (row, col, maxRow, maxCol, board) => {
        if(row < 0 || row > maxRow || col < 0 || col > maxCol) {
            return false;
        }
        return board[row][col] === 1;
    }

    const countLiveNeighbors = (lifeBoard, row, col) => {
        let liveCellsCount = 0;

        const maxRow = lifeBoard.length - 1;
        const maxCol = lifeBoard[maxRow].length - 1;

        // up
        if(isAlive(row - 1, col, maxRow, maxCol, lifeBoard)) {
            liveCellsCount++;
        }
        // down
        if(isAlive(row + 1, col, maxRow, maxCol, lifeBoard)) {
            liveCellsCount++;
        }
        // left
        if(isAlive(row, col - 1, maxRow, maxCol, lifeBoard)) {
            liveCellsCount++;
        }
        // right
        if(isAlive(row, col + 1, maxRow, maxCol, lifeBoard)) {
            liveCellsCount++;
        }
        // up left diagonal
        if(isAlive(row - 1, col - 1, maxRow, maxCol, lifeBoard)) {
            liveCellsCount++;
        }
        // up right diagonal
        if(isAlive(row - 1, col + 1, maxRow, maxCol, lifeBoard)) {
            liveCellsCount++;
        }
        // down left diagonal
        if(isAlive(row + 1, col - 1, maxRow, maxCol, lifeBoard)) {
            liveCellsCount++;
        }
        // down right diagonal
        if(isAlive(row + 1, col + 1, maxRow, maxCol, lifeBoard)) {
            liveCellsCount++;
        }
        return liveCellsCount;
    }

    const applyRules = (lifeBoard, row, col) => {

        const liveNeighbors = countLiveNeighbors(lifeBoard, row, col);
        if(lifeBoard[row][col] === 1) { // live cell rules apply
            if(liveNeighbors < 2) {
                return 0;
            } else if (liveNeighbors == 2 || liveNeighbors === 3) {
                return 1;
            } else if (liveNeighbors > 3) {
                return 0;
            }
        } else {
            if(liveNeighbors === 3) {
                return 1;
            }
        }

        return lifeBoard[row][col];

    };

    let boardCopy = deepCopy(board);
    for(let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            board[row][col] = applyRules(boardCopy, row, col);
        }
    }

    return board;

};



function fill2DArray(rows, cols) {
  let grid = new Array(rows).fill().map(() => new Array(cols).fill())
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++ ) {
      grid[row][col] = Math.round(Math.random())
    }
  }
  return grid
}

function isAlive(grid, row, col, rowLength, colLength) {
  if (row < 0 || col < 0 || row > rowLength || col > colLength) {
    return 0
  }
  return  grid[row][col]
}

function newState(grid, row, col) {
  let liveCount = 0
  const prevRow = row - 1
  const nextRow = row + 1
  const prevCol = col - 1
  const nextCol = col + 1
  const rowLength = grid.length - 1
  const colLength = grid[rowLength].length - 1
  const currentCell = grid[row][col]
  liveCount += isAlive(grid, prevRow, prevCol, rowLength, colLength)
  liveCount += isAlive(grid, prevRow, col, rowLength, colLength)
  liveCount += isAlive(grid, prevRow, nextCol, rowLength, colLength)
  liveCount += isAlive(grid, row, prevCol, rowLength, colLength)
  liveCount += isAlive(grid, row, nextCol, rowLength, colLength)
  liveCount += isAlive(grid, nextRow, prevCol, rowLength, colLength)
  liveCount += isAlive(grid, nextRow, col, rowLength, colLength)
  liveCount += isAlive(grid, nextRow, nextCol, rowLength, colLength)
  console.log('liveCount',liveCount)

  if (currentCell === 0) {
    return liveCount === 3 ? 1 : 0
  }

  if (liveCount < 2 || liveCount > 3) {
    return 0
  }
  return currentCell
}

function nextState(grid) {
  const gridCopy = JSON.parse(JSON.stringify(grid))

  for(let row = 0; row < gridCopy.length; row++) {
    for (let col=0; col < gridCopy[row].length; col++) {
      gridCopy[row][col] = newState(gridCopy, row, col)
    }
  }
  return gridCopy
}
