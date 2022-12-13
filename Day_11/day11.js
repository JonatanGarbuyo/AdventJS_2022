function getCompleted(part, total) {
  const partSeconds = part
    .split(':')
    .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)
  const totalSeconds = total
    .split(':')
    .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)

  let a = partSeconds
  let b = totalSeconds

  while (b) {
    let t = b
    b = a % b
    a = t
  }

  return `${partSeconds / a}/${totalSeconds / a}`
}

console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5
