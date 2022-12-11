function countTime(leds) {
  const ledsArr = leds.join('').split('1')
  ledsArr[0] += ledsArr.splice(-1)

  return Math.max(...ledsArr.map((led) => led.length)) * 7
}

// function countTime(leds) {
//   let seconds = 0
//   while (leds.some((led) => !led)) {
//     leds = leds.map((led, i, arr) =>
//       (i === 0 && arr.at(-1)) || arr[i - 1] || led ? 1 : led
//     )
//     seconds++
//   }
//   return seconds * 7
// }

// function countTime(leds) {
//   let seconds = 0

//   const recursiveCheck = (ledsArr) => {
//     if (ledsArr.every((led) => led)) return ledsArr

//     ledsArr = ledsArr.map((led, i, arr) => {
//       return (i === 0 && arr.at(-1)) || arr[i - 1] || led ? 1 : led
//     })
//     seconds++
//     return recursiveCheck(ledsArr)
//   }

//   recursiveCheck(leds)
//   return seconds * 7
// }

const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds)) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1])) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
console.log(countTime([1, 1, 1])) // 28
