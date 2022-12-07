// @ts-check
const assert = require('node:assert/strict')

/**
 * Una Funcion que devuelve el char art de un cubo
 * @param {number} size - tamaño del cubo
 * @returns {string}
 */
function createCube(size) {
  return [...Array(size)]
    .map((_, i) => `${' '.repeat(size - (i + 1))}${'/\\'.repeat(i + 1)}${'_\\'.repeat(size)}`)
    .concat([...Array(size)]
    .map((_, i) => `${' '.repeat(i)}${'\\/'.repeat(size - i)}${'_/'.repeat(size)}`))
    .join('\n')
}

const expected = '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/'

assert.equal(createCube(3), expected)
