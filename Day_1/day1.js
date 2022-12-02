/**
 * Una Funcion que envuelve regalos
 * @param {string[]} gifts - Listado de regalos a envolver
 * @returns {string[]}
 */
function wrapping(gifts) {
  return gifts.map((gift) => {
    let wrapping = '*'.repeat(gift.length)

    return `${wrapping}**\n*${gift}*\n**${wrapping}`
  })
}
