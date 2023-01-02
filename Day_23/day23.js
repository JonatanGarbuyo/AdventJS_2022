function executeCommands(commands) {
  const register = Array(8).fill(0)
  const instructions = {
    MOV: MOV,
    ADD: ADD,
    DEC: DEC,
    INC: INC,
    JMP: JMP,
  }

  for (let index = 0; index < commands.length; ) {
    const [inst, values] = commands[index].split(' ')
    const result = instructions[inst](values)
    index = result || ++index
  }

  return register

  // copia el valor del registro Vxx al registro Vyy;
  function MOV(values) {
    const [Vxx, Vyy] = values.split(',')
    const xIndex = parseInt(Vxx.slice(-1))
    const yIndex = parseInt(Vyy.slice(-1))
    const value = parseInt(Vxx) || register[xIndex]
    register[yIndex] = value
  }

  // calcula (Vxx + Vyy) y almacena el resultado en Vxx;
  function ADD(values) {
    const [Vxx, Vyy] = values.split(',')
    const xIndex = parseInt(Vxx.slice(-1))
    const yIndex = parseInt(Vyy.slice(-1))
    const value = register[xIndex] + register[yIndex]
    register[xIndex] = value % 256
  }

  // decrementa el valor de Vxx en 1.
  function DEC(Vxx) {
    const index = parseInt(Vxx.slice(-1))
    const value = register[index] - 1 + 256
    register[index] = value % 256
  }

  // incrementa el valor de Vxx en 1.
  function INC(Vxx) {
    const index = parseInt(Vxx.slice(-1))
    const value = register[index] + 1
    register[index] = value % 256
  }

  // salta a la instrucción número i si V00 es diferente de 0.
  // i está garantizado que sea un número de instrucción válido
  // y 0 sería la primera instrucción.
  function JMP(i) {
    return register[0] ? parseInt(i) : null
  }
}

console.log(
  executeCommands([
    'MOV 5,V00', // V00 es 5
    'MOV 10,V01', // V01 es 10
    'DEC V00', // V00 ahora es 4
    'ADD V00,V01', // V00 = V00 + V01 = 14
  ])
)

// Output: [14, 10, 0, 0, 0, 0, 0]

console.log(
  executeCommands([
    'MOV 255,V00', // V00 es 255
    'INC V00', // V00 es 256, desborda a 0
    'DEC V01', // V01 es -1, desborda a 255
    'DEC V01', // V01 es 254
  ])
)

// Output: [0, 254, 0, 0, 0, 0, 0]

console.log(
  executeCommands([
    'MOV 10,V00', // V00 es 10
    'DEC V00', // decrementa V00 en 1  <---┐
    'INC V01', // incrementa V01 en 1      |
    'JMP 1', // bucle hasta que V00 sea 0 ----┘
    'INC V06', // incrementa V06 en 1
  ])
)

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]

console.log(
  executeCommands([
    'MOV 10,V00',
    'MOV V00,V01',
    'MOV V01,V02',
    'MOV V02,V03',
    'MOV V03,V04',
  ])
)
// Output [10, 10, 10, 10, 10, 0, 0, 0]

console.log(
  executeCommands([
    'MOV 255,V00', // V00 es 255
    'MOV 5,V01', // V01 es 5
    'ADD V00,V01', // V00 = V00 + V01 = 5
    'MOV 255,V02', // V02 es 255
    'INC V02', // V00 es 256, desborda a 0
    'DEC V03', // V01 es -1, desborda a 255
  ])
)

// Output: [4, 5, 0, 255, 0, 0, 0]
