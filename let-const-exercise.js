// ES5 Global Constants example:
var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants Version:
const PI = 3.14; // By assigning PI to a const variable instead of var, PI is unable to get reassigned or redeclared. 

// 1. What is the difference between var and let? 
// With the variable var, you can reassign, redeclare, and mutate. Var has a function scope meaning it can only be accessed within the function it is declaring itself in. Let can also reassign and mutate but with let, you cannot redeclare. Let only exists inside a code block, not outside liek var can. 

// 2. What is the difference between var and const? 
// Var and const are only similiar in that they can mutate. With var, a variable can be reassigned and redeclared whereas with const, it cannot. Var has a function scope whereas const has a block scope. 

// 3. What is the difference between let and const? 
// Let and const are the most similiar in that they both are block-scoped, can mutate, and redeclare. Their only difference is that with let, you can reassign the variable but with const, you cannot. Think of the const variable as a "constant" - not changing, consistent. 

// 4. What is hoisting? 
// Hoisting is when the declaration of functions or variables are moved to the top of the scope, before the variable is executed. 
