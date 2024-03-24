// Given the data below, define a type alias for respresenting users.

// let users = [
//     {
//         name: "John Smith",
//         age: 30,
//         occupation: 'Softwar engineer'
//     },
//     {
//         name: 'Kate Müller',
//         age: 28
//     }
// ]

type Users = {
    name: string;
    readonly age: number;
    occupaton?: string;
}

let users: Users = {
    name: "John Smith",
    age: 30,
    occupaton: "Softwar Engineer"
}

// Birds fly. Fish swim. A Pet can be a Bird or Fish. 
// Use type aliases to represnet these

type Birds = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

type Pet = Birds | Fish;


// Define a type for representing the days of week. Valid values are 'Monday', 'Tuesday', etc.

type DayOfTheWeek = 'Monday' | "Tuesday" | 'Wendsday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';



// Simplify the following code snippets:

// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);

/* let user = getUser();
console.log(user?.address?. street); */

// let x = foo !== null && foo !== undefined ? foo : bar()
// let x = foo ?? foo : bar()

// What is the problem in this piece of code?

// let value: unknown = "a";
// console.log(value.toLowerCase());

let value: unknown = 'a';
if(typeof value === 'string')
console.log(value.toLowerCase());
