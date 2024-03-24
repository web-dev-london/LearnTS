
// Arrays
/* let numbers: number [] = [];
numbers.forEach(n =>n.) */

// Tuples
/*  let user: [number, string] = [1, 'John'];
user[1].replace('John', 'Doe');
user[0].toFixed(2);
console.log(user[0]);
console.log(user[1]); */

/* const enum Size {Small=1, Medium, Large}; // more optimize code
let mySize: Size = Size.Large;
console.log(mySize); */


// Functions
/* function calculateTax (income:number, taxYear = 2023):number {

if(taxYear < 50_000)
return income * 1.2;
return income * 1.3;
}
calculateTax(10_000, 2024); */

// Objects
/* let employee: {
  readonly id: number;
  name: string;
  retire: (data: Date) => void;
} = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  },
}; */

// Type Aliases

/* type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}
let employee : Employee = {
  id: 1,
  name: 'John',
  retire: (date: Date) => {
    console.log(date);
  }
} */

// Uninon Types

/* function kgToLbs (weight: number | string): number {
    // Narrowing
    if(typeof weight === 'number')
    return weight * 2.2
  else
  return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg') */

// Intersection Types

let weight: number & string;

type Draggable = {
  drag: () => void
}

type Resizeable = {
  resize: ()=> void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () =>  {},
  resize: () => {}
}

// Literal Types
// Literal meaning (exact, specific value);

type Quantity = 50 | 100;
let quantity: Quantity = 100;
// It can be a string

type Metric = 'cm' | 'inch';
let demention: Metric = 'inch';

// Nullable Types

function greet (name: string | null | undefined) {
  if(name)
      console.log(name.toLowerCase());
    else
    console.log('Hola');
}
greet(undefined)


// Optional Chaining

type Customer = {
  birthday? : Date
}

function getCustomer (id:number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()};
}

let customer =  getCustomer(1);
// Optional property access operator(Optional chaining)
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if(customer !== null && customer !== undefined)
//    cutomer?.[0]

// Optional call
let log: any = null;
log?.('a')


// The Nullish Coaelscing Operator

let speed: number | null = null;
let ride = {
  // Falsy (undefined, null, "", false, 0) 
  // speed: speed !== null ? speed : 30

// Nullish coaelscing operator
  speed: speed ?? 30
}

// Type Assertions

let phone = <HTMLInputElement> document.getElementById('phone');
// HTMLElement
// HTMLInputElement

phone.value

// The unknown Type

function render (document: unknown) {
    // Narrowing 
    if(typeof document === 'string'){
      console.log('Used unknown type by Narrowing');                
    }
}

// The never Type

function processEvents (message: string):never {
  throw new Error(message)
}


processEvents('dj');
console.log('Hello World');