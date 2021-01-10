
//map, filter, reduce

// > const x = [0,1,2,3]
// undefined
// > function addOne(number) { return number + 1}
// undefined
// > addOne(1)
// 2
// > x.map(addOne)
// [ 1, 2, 3, 4 ]
// > function isGreaterThanOne(num) {return num > 1}
// undefined
// > x.filter(isGreaterThanOne)
// [ 2, 3 ]
// > function add(x, y) { return x + y }
// undefined
// > add(1,2)
// 3
// > x.reduce(add)
// 6




function map(arr, fn) {
  const newArr = []

  arr.forEach(function(val) {
    newArr.push(fn(val))
  })
  return newArr
}

function addOne(num) {return num + 1}

const x = [0,1,2,3]

console.log(map(x, addOne))
