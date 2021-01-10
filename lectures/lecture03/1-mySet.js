
// Inherit the Set and add extra functionality to that

class MySet extends Set {
  constructor(arr) {
    super(arr)
    this.originalArray = arr
  }
  add(val) {
    super.add(val) // using the native implementation
    console.log('added ${val} to the set')
  }
  toArray() {
    return Array.from(this)
  }
  reset() {
    return new MySet(this.originalArray) // give me the origin set I had
  }
}
