class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hello, I am ${this.name}!`
  }
  getDetails() {
    return `${this.name} is ${this.age} years old`
  }
}

// this is a class
class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDetails() {
    let description = super.getDetails()
    if (this.hasMajor) {
      description += `, and studies ${this.major}`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}`
    }
    return greeting
  }
}

const me = new Traveler('Nicole', 30, 'Milwaukee, WI')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())
