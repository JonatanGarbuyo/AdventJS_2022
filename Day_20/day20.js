function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes = reindeerTypes.sort(
    (reindeerTypeA, reindeerTypeB) =>
      reindeerTypeB.weightCapacity - reindeerTypeA.weightCapacity
  )

  return gifts.map(({ country, weight: maxWeight }) => {
    let weightsList = reindeerTypes.filter((x) => x.weightCapacity < maxWeight)
    let currentCapacity = weightsList.reduce(
      (acc, curr) => (acc += curr.weightCapacity),
      0
    )

    let reindeers = weightsList.map(({ type, weightCapacity }) => {
      let num = (maxWeight / currentCapacity) >> 0

      currentCapacity -= weightCapacity
      maxWeight -= num * weightCapacity

      return { type, num }
    })

    return { country, reindeers }
  })
}

const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 },
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 },
]

console.log(JSON.stringify(howManyReindeers(reindeerTypes, gifts), null, 2))
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
