// 5- closure

function makeFunctonArray() {
    const arr = []

    for (var i = 0; i < 5; i++) { // var lifecycle is until function ends (line 10)  // let lifecycle is untl code block ends, end of the for loop
        arr.push(function() {console.log(i)})
    }
    return arr
}

const functionArr = makeFunctonArray()

functionArr[0]()
