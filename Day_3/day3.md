# Reto #3: ¿Cuántas cajas de regalos puede llevar Papá Noel?

Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. _**Cada regalo está representado por una cadena**_. Santa Claus tiene un trineo que puede llevar un _**peso limitado**_, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada renos tiene un _**límite de peso máximo**_ que puede llevar. El límite de peso máximo de cada reno es _**igual a dos veces el número de letras en su nombre**_.

Tu tarea es implementar una función `distributeGifts(packOfGifts, reindeers)` que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. _**Las cajas de regalos no se pueden dividir**_.

```
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
```

### Cosas a tener en cuenta:

- Las cajas de regalos no se pueden dividir.
- Los nombres de los regalos y los renos siempre serán mayores que 0.
