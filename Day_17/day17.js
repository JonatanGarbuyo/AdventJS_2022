// function carryGifts(gifts, maxWeight) {
//   let sacksList = []
//   let sack = { gifts: [], size: 0 }

//   for (let i = 0; i < gifts.length; i++) {
//     let gift = gifts[i]
//     if (gift.length > maxWeight) continue

//     if (sack.size + gift.length > maxWeight) {
//       sacksList.push(sack.gifts)
//       sack = { gifts: [], size: 0 }
//     }

//     sack.gifts.push(gift)
//     sack.size += gift.length
//   }

//   if (sack.size > 0) {
//     sacksList.push(sack.gifts)
//   }

//   return sacksList.map((sack) => sack.join(' '))
// }

// // //
// function carryGifts(gifts, maxWeight) {
//   function addSackOfGifts(sackList, gift) {
//     sackList.push(sackList[0].gifts)
//     sackList[0] = { gifts: [], size: 0 }
//     sackList = addGiftToSack(sackList, gift)
//     return sackList
//   }

//   function addGiftToSack(sackList, gift) {
//     sackList[0].gifts.push(gift)
//     sackList[0].size += gift.length
//     return sackList
//   }

//   const sackList = gifts
//     .filter((gift) => gift.length <= maxWeight)
//     .reduce(
//       (sackList, gift) => {
//         return sackList[0].size + gift.length > maxWeight
//           ? addSackOfGifts(sackList, gift)
//           : addGiftToSack(sackList, gift)
//       },
//       [{ gifts: [], size: 0 }]
//     )

//   if (sackList[0].size > 0) {
//     sackList.push(sackList[0].gifts)
//   }

//   return sackList.slice(1).map((sack) => sack.join(' '))
// }

// // //
// function carryGifts(gifts, maxWeight) {
//   const sackList = [[]]
//   let size = 0

//   function addSackOfGifts(gift) {
//     sackList.push(sackList[0])
//     size = 0
//     sackList[0] = []
//     addGiftToSack(gift)
//   }

//   function addGiftToSack(gift) {
//     sackList[0].push(gift)
//     size += gift.length
//   }

//   gifts
//     .filter((gift) => gift.length <= maxWeight)
//     .forEach((gift) => {
//       size + gift.length > maxWeight
//         ? addSackOfGifts(gift)
//         : addGiftToSack(gift)
//     })

//   sackList.push(sackList[0])
//   return sackList[0][0] ? sackList.slice(1).map((sack) => sack.join(' ')) : []
// }

// // //
function carryGifts(gifts, maxWeight) {
  const sacksObject = {}
  let temp = []
  let size = 0

  function addSack(i, gift) {
    sacksObject[i] = temp
    temp = []
    temp.push(gift)
    size = gift.length
  }

  function addGift(gift) {
    temp.push(gift)
    size += gift.length
  }

  gifts
    .filter((gift) => gift.length <= maxWeight)
    .forEach((gift, i) => {
      size + gift.length > maxWeight ? addSack(i, gift) : addGift(gift)
    })

  sacksObject.last = temp
  const sacksList = Object.values(sacksObject)
  return sacksList[0][0] ? sacksList.map((sack) => sack.join(' ')) : []
}

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10))
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7))
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4))
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6))
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro

console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2))
