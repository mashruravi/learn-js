function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sleep = function() {
        console.log(this.name + ": zzZZZZZzzzz");
    }
}

let ravi = new Person("Ravi", 24);

/*
 * The object "ravi" has properties "age" and "name", and function "sleep".
 *  
 * ravi.__proto__ : Person (what exactly does this mean?)
 * 
 * ravi.__proto__.constructor : function Person(name, age) { ... }  <-- constructor function
 * 
*/

console.log(ravi.constructor.name); // Output: Person


// ravi.sayHello();
// Doesn't work. "ravi" doesn't have "sayHello",
// and neither do any of the objects in its Prototype chain


Person.prototype.sayHello = function() {
    console.log("Hey there! I'm " + this.name);
}


ravi.sayHello();
// Works now:
/* ^^^^^^^^^ Moral of the story:
 * ==============================
 * Even when you attach something to the prototype AFTER object has been created,
 * the attached thing will be available to the new object.
 * This is proof that properties aren't "copied" during instantiation like in
 * classical inheritance.
 * 
 * ravi:
 *   - name
 *   - age
 *   - sleep
 *   - __proto__:
 *     - constructor
 *     - sayHello
 * 
*/


// Create an object from "ravi"
let mashru = Object.create(ravi);
/*
 * "mashru" will be an empty object with "mashru.__proto__" = "ravi"
*/

console.log(mashru.constructor.name); // Output: Person

/*
 * Common pattern:
 * ---------------
 * Define properties inside the constructor,
 * and the methods on the prototype.
*/
function Human(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Human.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

let jake = new Human("Jake", "Gyllenhaal");
console.log(jake.getFullName());