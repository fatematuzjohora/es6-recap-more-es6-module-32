// let and const

const herName = 'Humayra';
let phone = 'iphone 17';
phone = 'samsung Galaxy S17';


// default parameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max
}
const highest = maxNumber ();
console.log(highest);

// template string

const myNotes = `I am ${herName}, I have lot of book`
console.log(myNotes);

// arrow function
const square = x => x*x;
console.log(square(8));