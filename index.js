// Your code here

class Polygon {
  constructor(array) {
    this.array = array
  }
  
  get countSides() {
    let count = 0
    this.array.forEach(s => count = count+1)
    return count
  }
  
  get perimeter() {
    return this.array.reduce(function(total, i) { return total + i })
  }
  
}

class Triangle extends Polygon {
  
  get isValid() {
    
    if (this.array.length === 3 && (this.array[0] + this.array[1]) > this.array[2] && (this.array[1] + this.array[2]) > this.array[0] && (this.array[0] + this.array[2]) > this.array[1]){return true }
    
    else  {return false}
  }
  
}

class Square extends Polygon {
  get isValid() {
  let truth = []
  let arr = this
  this.array.forEach(function(s){
    if (s === arr.array[0]) {
      truth.push(s)
    }
  })

    if (truth.length === 4) {return true}
    else {return false}
  }
  }
}