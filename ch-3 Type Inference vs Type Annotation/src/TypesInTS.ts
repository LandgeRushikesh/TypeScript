// Type Inference - TypeScript automatically guesses the type based on the value.

let name = "Rushikesh"; //when we will hover on this variable it will show like this let name:string
// name = 10; //---> this will give error by saying Type number is not assignable to string

let cups = Math.random() < 0.5 ? 10 : "5"; //when we will hover on this variable it will show like this let name:number | string
console.log(cups);

// Type Annotation - We explicitly specify the type.

let userName: string = "rushi"; //here we have explicitly specified what is the type this variable

let isCorrect: boolean = true;

let num: number = 22;
console.log(isCorrect);
