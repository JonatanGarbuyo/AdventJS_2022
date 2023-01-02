# Reto #19: Ordenando los regalos

El día se acerca y Papá Noel tiene el almacén de juguetes hecho un desastre. Ayúdale a ordenar los juguetes en el almacén para que pueda encontrarlos más fácilmente.

Para ello, nos dan dos arrays. El primero es un _**array de juguetes**_, y el segundo es un _**array de números que indican la posición de cada juguete en el almacén**_.

Lo único a tener en cuenta es que _**las posiciones pueden no empezar en 0**_, aunque siempre serán números consecutivos y de forma ascendente.

Tenemos que _**devolver un array donde cada juguete esté en la posición que le corresponde**_.

```javascript
const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
```

### A tener en cuenta

- Siempre habrá el mismo número de juguetes que de posiciones.
- Ni los juguetes ni las posiciones se repiten.
