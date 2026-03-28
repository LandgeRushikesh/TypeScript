// Union - A variable can have multiple specific types, but only those types.

let value: string | number; //this tells value can be string or number

value = "Rushikesh";
console.log(value);
value = 22;
console.log(value);

// We can create our own data types

// This is called a string literal union type

let ApiRequest: "success" | "Pending" | "rejected" = "Pending";

ApiRequest = "success";
// ApiRequest = "done"//--> this line will give error saying Type "done" is not assignable.

console.log(ApiRequest);

let seat: "aisle" | "middle" | "window" = "window";

console.log(seat);

// Any - Disables TypeScript checking — anything is allowed.

let Value: any;

Value = "Rushi";
Value = 22;
Value = true;

// everything is acceptable

console.log(Value);
