//Execution Stack
/*
 - Functions invoked by other functions get added to the call stack
 - When functions complete, they are removed from the stack and the frame below continues execution
 */

function addOne(num) {
  return num + 1
  //throw new Error("Oh no, an error")
}

function getNum() {
  return addOne(10)
}

function c() {
  console.log(getNum() + getNum())
}

c()

/*
stack
------------
|          |
|  addOne  |
|          |
|  getNum  |
|          |
|  C()     |
------------

Function queue
---------------------------
|                          |
|                          |
|                          |
---------------------------

APIs
      |||
    |     |
  |         |
|             |
  |         |
    |     |
      |||
setTimeout()
fetch()



EventLoop

 */
