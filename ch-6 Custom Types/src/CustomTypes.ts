// Using type (Type Alias) - A type lets you create a custom name for a type

type user = {
  name: string;
  age: number;
};

let user1: user = {
  //Now User acts like a reusable structure
  name: "Rushi",
  age: 22,
};

// Ex., with union

type status = "Success" | "Pending" | "Rejected";

let apiStatus: status = "Pending";

// 'as' keyword - as tells TypeScript:“Trust me, I know the type better than you.”  It forces a variable to be treated as a specific type

let val: unknown = "Rushikesh";

let strLength: number = (val as string).length;

console.log(strLength);

// DOM Example -

let input = document.getElementById(".input") as HTMLInputElement; //Without as, TypeScript thinks:HTMLElement | null
