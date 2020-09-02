class Person {
    constructor (firstName, lastName, salray){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salray = salray;
    }
}

const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);

function Person1 (firstName, lastName, salray){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salray = salray;
}

const oldPerson = new Person1('Grand', 'Dadu', 1300);
console.log(oldPerson);