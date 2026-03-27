function greet(name) {
    //:string outside the () shows what this function should return
    return "Hello ".concat(name);
}
var msg = greet("Rushi");
var msg1 = greet(42);
console.log(msg);
console.log(msg1);
