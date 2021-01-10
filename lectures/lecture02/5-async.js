/*
ASYNC Functions

setTimeout()
XMLHttpRequest(), JQuery.ajax(), fetch()
Database calls



 */

function printOne() {
  console.log('one')
}
function printTwo() {
  console.log('Two')
}
function printThree() {
  console.log('Three')
}

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()

/*


stack
----------------------------------
|                                |
|  printThree()                  |
|                                |
|  setTimeout(printTwo, 0)       |
|                                |
|  SetTimeout(printOne, 1000)    |
---------------------------------

functions with setTimeout() goes to API, but printThree() does not go to API and gets executed directly from EXECUTION STACK

After API, setTimeout() functions goes to FUNCTION QUEUE.

Once the EXECUTION STACK is empty it will search for awaiting functions inside FUNCTION QUEUE and get it to EXECUTION STACK and executes that

EVENT LOOP keeps checking if there is any awaiting function inside FUNCTION QUEUE, and if there is it will get it to EXECUTION STACK
 */
