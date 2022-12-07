// @ts-check

/**
 * Una Funcion que determina si es posible empaquetar todas las cajas en una sola
 * de manera que cada caja contenga a otra.
 * @param {number[]} giftsCities - cajas
 * @param {number} maxGifts - cajas
 * @param {number} maxCities - cajas
 * @returns {number}
 */
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      // filtrar las giftsCities mayores que maxGifts para reducir el array.
      .filter((city) => city <= maxGifts)
      // obtener todas las permutaciones
      .reduce(
        // @ts-ignore
        (acc, city) => acc.concat(acc.map((data) => [city].concat(data))),
        [[]]
      )
      // filtrar las permutaciones con mas cities que maxCities
      .filter((group) => group.length <= maxCities)
      .map((group) => {
        // devolver los sumas de los valores del grupo mayores a maxGifts
        const result = group.reduce((acc, city) => acc + city, 0)
        return result > maxGifts ? 0 : result
      })
  )
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3))
