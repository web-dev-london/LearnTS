
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