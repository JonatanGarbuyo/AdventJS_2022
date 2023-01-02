function fixLetter(letter) {
  return letter
    .replace(/\s*,/g, ', ')
    .replace(/\s*\./g, '. ')
    .replace(/\s*\?+/g, '? ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(
      /[\?\!\.]\s\w/g,
      (str) =>
        str.slice(0, str.length - 1) + str.charAt(str.length - 1).toUpperCase()
    )
    .replace(
      /^\w|santa|claus/g,
      (str) => str.charAt(0).toUpperCase() + str.slice(1)
    )
    .replace(/[^\.\?\!]$/g, (str) => str + '.')
}


console.log(
  fixLetter(
    ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
  )
)
console.log(
  'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
)

console.log(
  fixLetter(
    "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
  )
)
console.log(
  "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
)
