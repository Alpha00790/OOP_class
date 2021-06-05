'use strict';
/*
const currrentYear = new Date();
class Person {
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }
  introduce() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  }
  get age() {
    return currrentYear.getFullYear() - this.birthYear;
  }
}
class bankAccount extends Person {
  //   #pin;
  constructor(firstName, lastName, gender, birthYear, pin, course) {
    super(firstName, lastName, gender, birthYear);
    this.pin = pin;
    this.course = course;
  }
  set newPin(pin) {
    return (this.pin = pin + this.birthYear);
  }
  introduce() {
    console.log(`I'm ${this.firstName} and I study in ${this.course}`);
  }
}

const shaikat = new bankAccount('Shaikat', 'Barua', 'Male', 1997, 1111, 'CSE');
shaikat.introduce();
shaikat.newPin = 2222;
console.log(shaikat.pin);
*/
// shaikat.introduce();
// console.log(shaikat.age);
// console.log(shaikat.lastName);
// const zakaria = {
//   firstName: 'Zakaria',
//   lastName: 'Iqbal',
//   birthYear: 1997,
//   gender: 'Male',
//   introduce() {
//     console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
//   },
// };
// zakaria.introduce();
// console.log(zakaria.firstName);

// const zakaria = {
//     firstName: 'Zakaria',
//     secondName: 'Iqbal',
//     birthYear: 1997,
//     gender: 'Male',
//   };
//   const zakaria = {
//     firstName: 'Zakaria',
//     secondName: 'Iqbal',
//     birthYear: 1997,
//     gender: 'Male',
//   };

const currrentYear = new Date();
// console.log(currrentYear);
class Person {
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }
  introduce() {
    console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
  }
}
// const zakaria = new Person('Zakaria', 'Iqbal', 'Male', 1997);
// const gourab = new Person('Gourab', 'Roy', 'Male', 2000);

// gourab.introduce();

class BankAccount extends Person {
  #pin;
  // super(firstName,lastName,gender)
  constructor(firstName, lastName, gender, birthYear, pin, course) {
    super(firstName, lastName, gender, birthYear);
    this.#pin = pin;
    this.course = course;
  }
  get age() {
    return currrentYear.getFullYear() - this.birthYear;
  }
  set newPin(pin) {
    this.#pin = this.birthYear + pin;
  }

  introduce() {
    super.introduce();
    console.log(`My name is ${this.firstName} and I study in ${this.course}`);
  }
}
const zakaria = new BankAccount('Zakaria', 'Iqbal', 'Male', 1997, 1234, 'CSE');
zakaria.introduce();
console.log(zakaria.firstName);
// console.log(zakaria.pin);
console.log(zakaria.age);
// zakaria.newPin = 1234;
// console.log(zakaria.pin);
// console.log(zakaria.#pin);
zakaria.introduce();

class Car {
  constructor(company, speed) {
    this.company = company;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.company} is going at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.company} is going at ${this.speed} km/h`);
    return this;
  }
}
const lamborghini = new Car('Lambo', 125);

lamborghini
  .accelerate()
  .brake()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake();
lamborghini.brake();
class Ecar extends Car {
  constructor(company, speed, charge) {
    super(company, speed);
    this.charge = charge;
  }
  // get dCharge() {
  //   return --this.charge;
  // }
  set chargeI(chargeTo) {
    this.charge = chargeTo + this.charge;
  }
}

const tesla = new Ecar('Tesla', 120, 20);

tesla.chargeI = 90;

console.log(tesla);
