function printTable(gifts) {
  const giftLength = Math.max(
    'Gift'.length,
    ...gifts.map((gift) => gift.name.length)
  )
  const quantityLength = Math.max(
    'Quantity'.length,
    ...gifts.map((gift) => gift.quantity.toString().length)
  )

  const tableTop = '+'.repeat(giftLength + quantityLength + 7)
  const tableBottom = '*'.repeat(giftLength + quantityLength + 7)
  const gifHeader = `| ${'Gift'.padEnd(giftLength, ' ')} | ${'Quantity'.padEnd(
    quantityLength,
    ' '
  )} |`
  const separator = `| ${'-'.padEnd(giftLength, '-')} | ${'-'.padEnd(
    quantityLength,
    '-'
  )} |`
  const table = [tableTop, gifHeader, separator]

  return table
    .concat(
      gifts.map(
        (gift) =>
          `| ${gift.name.padEnd(giftLength, ' ')} | ${gift.quantity
            .toString()
            .padEnd(quantityLength, ' ')} |`
      ),
      tableBottom
    )
    .join('\n')
}

console.log(
  printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 },
  ])
)
// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************

console.log(
  printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 },
  ])
)
// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************
