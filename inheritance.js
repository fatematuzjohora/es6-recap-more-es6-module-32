class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    startSession(){
       console.log(this.name,'start a support session'); 
    }

}

// const aamir = new Support('amir khan', 'dubai');
// aamir.startSession();
// const salmaan = new Support();
// console.log(aamir);

class student {
    name;
    description = 'Student Web Dev';
    address = 'bd';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}
// buildARoutine(student) {
//     console.log(this.name, 'build a routine for', student  );
// }
// const alias = new buildARoutine('Alia bhatt', 'mumbai');
// console.log(alias);

function min(nums) { 
    return Math.min(nums) 
}
console.log(min( [1,3,2 ]));

const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

console.log(player.firstName);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);

console.log(output);