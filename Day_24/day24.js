function canExit(maze) {
  // wrap maze with wall.
  const wall = Array(maze.length + 2).fill('W')
  maze = [wall, ...maze.map((row) => ['W', ...row, 'W']), wall]
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  function CanExitRecurson(maze, row, col) {
    return (
      maze[row][col] === 'E' ||
      (maze[row][col] === ' ' &&
        (maze[row][col] = '.') &&
        moves.some(([deltaRow, deltaCol]) =>
          CanExitRecurson(maze, row + deltaRow, col + deltaCol)
        ))
    )
  }

  const startRow = maze.findIndex((columns) => columns.find((x) => x === 'S'))
  const startCol = maze[startRow].findIndex((cell) => cell === 'S')

  maze[startRow][startCol] = ' '

  const boolean = CanExitRecurson(maze, startRow, startCol)
  return boolean
}

// function canExit(maze) {
//   const entryRow = maze.findIndex((inner) => inner.indexOf('S') >= 0)
//   const entryCol = maze[entryRow].findIndex((inner) => inner.indexOf('S') >= 0)
//   const entry = [entryCol, entryRow]

//   function goTo([x, y]) {
//     const result = maze[y][x] === 'E'

//     delete maze[y][x]
//     const movements = [
//       [x + 1, y],
//       [x - 1, y],
//       [x, y - 1],
//       [x, y + 1],
//     ]
//     return (
//       result +
//       movements
//         .filter((move) => maze[move[1]])
//         .filter((move) => [' ', 'E'].includes(maze[move[1]][move[0]]))
//         .some(goTo)
//     )
//   }

//   const result = goTo(entry)

//   return !!result
// }

console.log(
  canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ])
) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

console.log(
  canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ])
) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]
