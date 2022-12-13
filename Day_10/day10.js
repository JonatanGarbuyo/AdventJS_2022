//prettier-ignore
function checkJump(heights) {
  // spread (...) and apply will either fail or return the wrong result
  // if the array has too many elements
  const leftSide = heights.splice(0,
    heights.indexOf(heights.reduce((a, b) => Math.max(a, b), -Infinity))
  )
  const conditionLeft = leftSide.slice(1).every((l, i) => l >= leftSide[i])
  const conditionRight = heights.slice(1).every((h, i) => h <= heights[i])

  return (
    conditionLeft && conditionRight && !!leftSide.length && heights.length > 1
  )
}

const heights = [1, 3, 8, 5, 2]
console.log(checkJump(heights)) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights2 = [1, 7, 3, 5]
console.log(checkJump(heights2)) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3

*/

console.log(checkJump([2, 2, 2, 2])) //false
console.log(checkJump([1, 2, 3])) //false
