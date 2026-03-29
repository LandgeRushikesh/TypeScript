/*

Interface - An interface defines the structure (shape) of an object.

👉 It tells:

- What properties exist
- What their types are
*/

// Basic Example -

interface user {
  name: string;
  age: number;
}

const user1: user = {
  name: "Rushi",
  age: 22,
};
//Now any User object must follow this structure

// Why we need Interface

/*
- Type Safety - means we cannot assign any other type value other than mentioned in the interface
- Code Reusability - means we don't need to write all this types and everything for each object
- Better code Readability
*/

// Used in Real Project

interface Props {
  title: string;
  price: number;
}

// function Product(props:Props){
//     return <h1>{props.title}</h1>
// }

// How to use Interfaces-

// 1.Optional Properties

interface person {
  name: string;
  age?: number;
}

const person1: person = {
  name: "Rushikesh",
};

// 2. Readonly Properties
interface human {
  readonly id: number;
  name: string;
}

const human1: human = {
  id: 1,
  name: "Rushi",
};

// human1.id = 2//--->This will give error as id is read-only property

// 3. Extending Interface
interface Person {
  name: string;
}

interface employee extends Person {
  salary: number;
}

const Person1: employee = {
  name: "Rushikesh",
  salary: 500000,
};

// 4. Inteerface Merging - Interfaces automatically merge

interface men {
  name: string;
}

interface men {
  salary: number;
}

const men1: men = {
  name: "Rushikesh",
  salary: 50000,
};
