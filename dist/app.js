"use strict";
// arrow function
const add = (a, b) => a + b;
const squre = (x) => x * x;
console.log(add(5, 5));
console.log(squre(3));
const logMsg = (msg) => {
    return msg;
};
console.log(logMsg("User logged in sucessfully!"));
const logFailed = (max_attempt, name, msg) => {
    return `${name}, ${msg}. You tried the maximum ${max_attempt} times.`;
};
console.log(logFailed(3, "Mr Robot", "login failed"));
