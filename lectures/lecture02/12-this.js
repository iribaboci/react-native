

/*
this

 - Refers to an object that's set at the creation of a new execution context (function invocation)
 - in the global execution context, refers to global objects
 - If the function is called as a method of an object, 'this' is bound to the object the method is called on

 */

const person = {
  name: 'tahir',
  greet: function() { console.log("Hello " + this.name) }
}

person.greet() //Hello Tahir

this.name = person.name // with this the greet() it will print "Hello tahir"
const greet = person.greet
greet() // Hello undefined




const friend = {
  name: 'david'
}

friend.greet = person.greet
friend.greet()// Hello David  -  Because 'this' it will reference to friend.name


//Setting 'this' manually with
//bind(), call(), apply()
// ES6

const greet2 = person.greet.bind({name: 'this is a bound object'}) // defining 'this' for this particular function
//calling 'apply' or 'call' will imideatlly call the function
person.greet.call({name: 'this is a call object'})
person.greet.apply({name: 'this is a apply object'})
greet2()

const newPerson = {
  name: 'newPerson',
  greet: () => { console.log("Hi, " + this.name) }
}

newPerson.greet()
