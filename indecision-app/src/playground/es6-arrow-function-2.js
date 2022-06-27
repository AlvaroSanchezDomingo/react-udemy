//arguments object - no longer bound with arrow functions
 const add = (a, b) => {
    //console.log(arguments);//arguments cant be access in arrow functions
    return a + b;
 }
console.log(add(55,1,1000))

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelpia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }        
}


const multiplier = {
    numbers : [1,2,3],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());