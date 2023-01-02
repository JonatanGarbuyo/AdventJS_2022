function decorateTree(base) {
  const decorations = {
    BB: 'B',
    BP: 'R',
    BR: 'P',
    PB: 'R',
    PP: 'P',
    PR: 'B',
    RB: 'P',
    RP: 'B',
    RR: 'R',
  }

  function addRow(tree) {
    return tree[0].length === 1
      ? tree
      : addRow([
          tree[0]
            .split(' ')
            .map((char, i, arr) => char + arr[i + 1])
            .slice(0, -1)
            .map((deco) => decorations[deco])
            .join(' '),
          ...tree,
        ])
  }

  const decoratedTree = addRow([base])
  return decoratedTree
}

/*
Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R
*/

console.log(decorateTree('B P R P'))
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B')) // ['B', 'B B']
