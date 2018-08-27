const user = {
  name: 'Nicole',
  cities: ['Milwaukee', 'Another City'],

  printPlacesLived() {
    const cityMessages = this.cities.map(
      city => `${this.name} has lived in ${city}`
    )

    return cityMessages
  }
}

// console.log(user.printPlacesLived())

const multiplier = {
  numbers: [10, 42, 5],
  multiplyBy: 2,

  multiply() {
    return this.numbers.map(x => x * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
