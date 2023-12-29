let name  = "Yogesh";
let age = 23;
const url = "Yogesh%20%20hello";
console.log(url.replaceAll('%20'," "));
// name=name.substring(0,4);
name = name.slice(-6,8);
console.log(`Hello ${name} your age is ${age}`);