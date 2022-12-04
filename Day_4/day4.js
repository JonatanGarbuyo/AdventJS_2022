// @ts-check

/**
 * Una Funcion que calcula Horas extra
 * @param {{l:number, w: number, h:number}[]} boxes - año a calcular
 * @returns {boolean}
 */
function fitsInOneBox(boxes) {
  return boxes
    .sort((boxA, boxB) => boxA.l + boxA.h + boxA.w - (boxB.l + boxB.h + boxB.w))
    .every((box, i, arr) =>
      i === 0
        ? true
        : box.l > arr[i - 1].l && box.w > arr[i - 1].w && box.h > arr[i - 1].h
    )
}

const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]
console.log(fitsInOneBox(boxes1)) // true

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]
console.log(fitsInOneBox(boxes2)) // false

const boxes3 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]
console.log(fitsInOneBox(boxes3)) // true
