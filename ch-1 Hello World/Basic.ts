function greet(name: string): string {
  //:string outside the () shows what this function should return
  return `Hello ${name}`;
}

const msg: string = greet("Rushi");
// const msg1: string = greet(42);
console.log(msg);
// console.log(msg1);//this will give an error
