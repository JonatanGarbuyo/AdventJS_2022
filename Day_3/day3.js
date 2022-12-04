// @ts-check

/**
 * Una Funcion que recibe una caja de regalos y una lista de renos y devuelve
 * el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños.
 * @param {string[]} packOfGifts - caja de regalos
 * @param {string[]} reindeers - lista de renos
 * @returns {number}
 */
function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    (reindeers.join('').length * 2) / packOfGifts.join('').length
  )
}
