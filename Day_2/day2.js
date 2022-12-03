// @ts-check

/**
 * Una Funcion que calcula Horas extra
 * @param {number} year - año a calcular
 * @param {string[]} holidays - Listado de fechas no laborables
 * @returns {number}
 */
function countHours(year, holidays) {
  return (
    holidays.filter((holiday) => {
      const day = new Date(holiday + '/' + year).getDay()
      return day % 6 !== 0
    }).length * 2
  )
}
