var PI = 3.14;
PI = 42; // stop me from doing this!

/* Write an ES2015 Version */
const PI = 3.14;

// The difference between var and let is that var has function scope, and can be redeclared and reassigned. Let cannot be redeclared, and is only accessible within the code block that it is written.
// The difference between var and const is similar to that of let and var in the fact that it can only be accessed within the scope of the code block; however, const cannot be reassigned or redeclared.
// Let can be reassigned, and const cannot.
// Hoisting is a behavior in Javascript where variables are lifted to the top of their scope, and when using the var keyword, the variable does not need to be defined before it can be accessed, and will return undefined if logged to the console. Functions can also be hoisted, and accessed before being defined later.