class Person {
    constructor(name, age) {
        this.name= name;
        this.age = age;
    }
    greetings() {
       console.log (`My name is ${this.name} and I am ${this.age} years old`)
    }
}
person2 = new Person ('Rahman', 24);
person2.greetings();
module.exports = Person;