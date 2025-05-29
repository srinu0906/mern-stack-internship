// ES6


// === operator
const num1 = 1;
const num2 = '1';

console.log(typeof num1)
console.log(typeof num2)

if(num1 === num2){
    console.log('answer is correct')
} else{
    console.log('answer is wrong')
}

// destructuring
const fruits =['apple','banana','mango','papaya'];
const f1 = fruits[0];
const f2 = fruits[1];
console.log(f1)
console.log(f2)


// new way using destructuring
const [fr1,fr2] = fruits;
console.log(fr1)
console.log(fr2)

// destructring objects
const person= {
    fname:'srinu',
    branch:'cse',
    cgpa:8.8,
    skills:{
        one:'python',
        two:'java',
        three:'Javascript'
    }
}

const {
    fname,
    skills:{one},
    branch: Group,
} = person;
console.log(fname)
console.log(one)
console.log(Group)