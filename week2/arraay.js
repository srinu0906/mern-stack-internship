//arrays
// syntax -> []
let avengers = ['Captain America','Iron Man',101,false]
console.log(avengers)

//indexes in array
const JL = ['SuperMan','Batman','Wonder Woman','Flash']
console.log(JL[0])
console.log(JL[3])


//what if we dont know the length of a array
console.log(JL.length)
console.log(JL[JL.length-1])

//array methods
const thunderbolts = ['Bucky','Yalena','John','Ava']
// to add elementa from the last -> push()
thunderbolts.push('Bob');
thunderbolts.push('Alexi');
console.log(thunderbolts)

// to remove eleement at last place -> pop()
thunderbolts.pop()
thunderbolts.pop()
thunderbolts.pop()
console.log(thunderbolts)

//add elements from start -> unshift()
const names = ['sonic','tails','shadow','Knuckles']
console.log(names)
names.unshift('Amy')
console.log(names)


//remove elements from start -> shift()
names.shift()
names.shift()
console.log(names)

console.log(names.indexOf('shadow'))
console.log(names.indexOf('tails'))

