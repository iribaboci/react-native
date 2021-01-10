// 5- closure

const functionArr = (function() {
    const arr = []

    for (var i = 0; i < 5; i++) { // var lifecycle is until function ends (line 10)  // let lifecycle is untl code block ends, end of the for loop
        arr.push( (function(x) {
          return function() {console.log(x)}
      })(i))
    }
    return arr
})()

functionArr[3]()
