function canFly(constructorFunction: function) {
  console.log("CAN FLY INVOKED");
  constructorFunction.prototype.fly = true;
}

@canFly // Custom Decorators
class Person {
  private name: string;

  constructor(name: string) {
    console.log("#### constructor called ####");
    this.name = name;
  }
}

console.log("#### Creating 1st ####");
let clark: Person = new Person("Clark");
console.log(clark);
console.log(`Can I flye ${clark["fly"]}`);

console.log("#### Creating 2st ####");
let josh: Person = new Person("Josh");
console.log(josh);
console.log(`Can I flye ${josh["fly"]}`);
