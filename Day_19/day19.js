function sortToys(toys, positions) {
  return toys
    .map((toy, i) => ({ name: toy, position: positions[i] }))
    .sort((toyA, toyB) => toyA.position - toyB.position)
    .map((toy) => toy.name)
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

console.log(sortToys(toys, positions))
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

console.log(sortToys(moreToys, morePositions))
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
