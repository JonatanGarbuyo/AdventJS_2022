function getOptimalPath(path) {
  return path.reduceRight((acc, curr) => {
    return curr.map((val, i) => {
      return val + Math.min(acc[i], acc[i + 1])
    })
  })[0]
}

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1
