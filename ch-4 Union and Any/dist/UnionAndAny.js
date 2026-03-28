"use strict";
// Union - A variable can have multiple specific types, but only those types.
Object.defineProperty(exports, "__esModule", { value: true });
let value; //this tells value can be string or number
value = "Rushikesh";
console.log(value);
value = 22;
console.log(value);
// We can create our own data types
let ApiRequest = "Pending";
ApiRequest = "success";
// ApiRequest = "done"//--> this line will give error saying Type "done" is not assignable.
console.log(ApiRequest);
let seat = "window";
console.log(seat);
// Any - Disables TypeScript checking — anything is allowed.
let Value;
Value = "Rushi";
Value = 22;
Value = true;
// everything is acceptable
console.log(Value);
//# sourceMappingURL=UnionAndAny.js.map