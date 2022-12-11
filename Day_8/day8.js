function checkPart(part) {
  const isSubstringPalindrome = (arr) =>
    [...arr].some((_, i, stringArr) => {
      const word = [...stringArr]
      word.splice(i, 1)
      return [...word].join('') === [...word].reverse().join('')
    })

  return (
    [...part].join('') === [...part].reverse().join('') ||
    isSubstringPalindrome(part)
  )
}

// Esto da da error:
// "Evita devolver la ejecución de una función. Haz tu código más claro."
//
// function checkPart(part) {
//   const isPalindrome = (charsArr) => {
//     return [...charsArr].join('') === [...charsArr].reverse().join('')
//   }

//   const isSubstringPalindrome = (arr) =>
//     [...arr].some((_, i, stringArr) => {
//       const word = [...stringArr]
//       word.splice(i, 1)
//       return isPalindrome(word)
//     })

//   return isPalindrome(part) || isSubstringPalindrome(part)
// }

console.log(checkPart('uwu')) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart('miidim')) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart('midu')) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
