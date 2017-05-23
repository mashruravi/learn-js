/*
 * Preface
 * =======
 * "Inheriting" objects do not have functionality copied over to them,
 * instead the functionality they inherit is linked to them via the
 * prototype chain (often referred to as prototypal inhertiance)
*/

// All properties inside the constructor
function Person(first, last, age, gender, interests) {

	this.name = {
		first,
		last
	}

	this.age = age;
	this.gender = gender;
	this.interests = interests;

};

// All methods on the prototype
Person.prototype.greeting = function () {
	console.log("Hi! I'm " + this.name.first + ".");
}

// Task: to create a "Teacher" which inherits from "Person", but also includes:
//  - subject: will contain the subject that the teacher teaches
//  - updated greeting() that sounds more formal than the standard one defined
function Teacher(first, last, age, gender, interests, subject) {

	Person.call(this, first, last, age, gender, interests); // <--- check this out!

	this.subject = subject;

};

/* The "call()" function:
 * ======================
 * Allows you to call function defined somewhere else in a specific context.
 * First parameter specifies that value of "this" when running the function,
 * and the other parameters are those to be passed to the function you are
 * invoking.
*/

console.log(Teacher.prototype);
// Output: Teacher

console.log(Teacher.prototype.constructor);
// Output: Teacher (reference to its own constructor function)
// We need Teacher to inherit methods from Person's prototype.

Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype now inherits all methods available on Person.prototype

console.log(Teacher.prototype);
// Output: Person
// !!!???

Teacher.prototype.constructor = Teacher;

console.log(Teacher.prototype);
// Output: Teacher

// Redefining the "greeting" function
Teacher.prototype.greeting = function () {
	console.log("Hello, I am " + this.name.first + " " + this.name.last +
		", and I teach " + this.subject + ".");
}

let teacher = new Teacher("Davie", "Jones", 33, "male", ["Chess", "Football", "Reading"], "History");

console.log(teacher.age); // 33
console.log(teacher.interests[0]); // Chess
teacher.greeting(); // Hello, I am Davie Jones, and I teach History.