// spread and rest operators (ES6);

// let n1 = [1,2,3,4]
// let n2 = [5,6,7]

// let n3 = n1 + n2
// let n4 = [...n1,...n2]
// n3
// n4

let crayons1 = ['red','green','blue'];
let crayons2 = ['yellow','white','black']

console.log(crayons1)
console.log(crayons2)

let newArr = [...crayons1,...crayons2]
console.log(newArr);


const youtube = 'mrbeast'.split('')

const letters = [...youtube]
console.log(letters)


const boys = ['Srinu','Shaik','Surni','Sri Ram'];
const deva = 'Sathvick';
const girls = ['Jennifer','Selena','Britney'];

const friends = [...boys,deva,...girls]
console.log(friends)

// rest operator
const fruits = ['apple','mango','banana','orange']
const [x,y,...remainig] = fruits;

console.log(x)
console.log(y)
console.log(remainig)


// higher order functions
// Array of objects -> [{},{},{}]
const people = [
    { fname:'John', age:30, role:'Dev'},
    { fname:'Susan', age:39, role:'Tech Lead'},
    { fname:'Bob', age:33, role:'UI/UX Designer'},
]

function showPerson(x){
    console.log(x.fname)
}
people.forEach(showPerson);

people.forEach((x)=>{
    console.log(x.fname)
});

const office = people.map((x)=>{
    // console.log(x.fname)
    return x.fname
});

console.log(office)