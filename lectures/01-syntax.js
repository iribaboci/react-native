const firstName = "Tahir";
const lastName = 'Baboci'

const val = 25

const arr = [
             'string',
             42,
             function() { console.log('hi') }
             ]
arr[2]() // to run the function we defined

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// == coerces the types (does not care for the types)
// === requires equivalent types

// part 2

const x = 42
console.log(typeof x)
console.log(typeof null)



//part 3

const o = new Object() // same => const 02 = {}
o.firstName = "Tahir"
o.lastName = 'Baboci'
o.isTeaching = true
o.greet = function() {
    console.log('hello world!')
}


const o2 = {}
o.firstName = 'john'
o['lastName'] = 'Doe'
const key = "isTeaching"
o[key] = true
o['greet'] = function() {
    console.log("hello world!")
}


const o3 = {
    1: "test",
    firstName: 'Tahir',
    lastName: "Baboci",
    isTeaching: true,
    greet: function() {
        console.log("hello world!")
    },
    address: { // object within an object
        street: "main str.",
        number : 123
    }
}


// object mutation

const o4 = {
    a: 'a',
    b: 'b',
    obj: {
        key: "key"
    }
}


const o4mut = o4 // o4 and o4mut are pointing to the same object
o4mut.a = 'new value'
console.log(o4mut.a) // the value of "a" it will be 'new value' for both 04 and 04mut




const o4duplicate = Object.assign({}, o4) // bring me a brand new object and assing only the values of o4 to it and it will reference the objects in o4

o4duplicate.obj.key = "new value" // this will change the value for o4duplicate and o4

console.log(o4.obj.key)

//deep copy

function deepCopy(obj) {
    // check if vals are objects
    // if so, copy that object (deep copy)
    // else return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for(let i = 0; i < keys.length; i++){
        const key = keys[i]
        if(typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key])
        }else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o5 = deepCopy(o4)
o4.obj.key = "newKey!"
console.log(o5.obj.key)



//

//42.toString // it will fail

const num = 42
num.toString() // works
num.__proto__

//changing the prototype of primitive type Number
Number.prototype.toString = function() {return "100"} // WARNING : Don't do it, it is considered very dangerous
num.toString() // it will return "100"


// scoping

const thisIsAConst = 50
//thisIsAConst = 51 // error: we cannot mutate a constant

const constObj = {}

constObj.a = 'a'


let thisIsALet = 51
thisIsALet = 52


// let thisIsALet = 51 // errors! because it is already declared... if use var this is not going to find it

console.log(thisIsAVar) // will return undefined... means it is hoisted
var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = "new value" // no error, no protection... this is fucking mess
console.log(thisIsAVar) // it will return "new value" this is called shadowing

thisIsHoisted() // this is called function hoisting
// In other words; a variable(var) or function can be used before it has been declared.
function thisIsHoisted() {
    console.log('this is a function declared at the bottom of a file')
}

//thisIsNotHoisted() // error
// this is declared as const and cannot be changed
const thisIsNotHoisted = function() {
    console.log('is this hoisted ? no it is not')
}
 /*

//typedError:  thisIsNotHoisted is not a function

var thisIsNotHoisted = function() {
    console.log('is this hoisted ? no it is not')
}
*/



thisIsAlsoAVariable = "hello" // this is a global variable






// 5- closure

function makeFunctonArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push(function() {console.log(i)})
    }
    return arr
}

const arr = makeFunctonArray()

arr[0]()
