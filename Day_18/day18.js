function dryNumber(dry, numbers) {
  return [...Array(numbers + 1)]
    .map((_, num) => num !== 0 && num)
    .filter((num) => num.toString().includes(dry.toString()))
}

console.log(dryNumber(1, 15)) // [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el dígito 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

console.log(dryNumber(2, 20)) // [2, 12, 20]

// no tenemos tinta para el dígito 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20
