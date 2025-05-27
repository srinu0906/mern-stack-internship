// objects -> collection of key value pairs
const obj = {
    fname: "Srinu",
    lname: "Vakada",
    age: 20,
    friends: ['Chari', 'Kurma', "mandeep", 'Sai'],
    obj2: {
        villan: 'Joker',
        hero: 'Batman',
        hobbies: ['go to gotham with harley', 'give tramua to batman'],
        skills:{
            numOne:'Laughter',
            numTwo:'Planning',
            numThree:{
                indoor:"chess"
            }
        }
    }
}

//acessing values
// using dot notation
console.log(obj.fname)
console.log(obj.age)
console.log(obj.friends[3])
console.log(obj.obj2.hero)
console.log(obj.obj2.hobbies[1])
console.log(obj.obj2.skills.numThree.indoor)

const person = {
    name:'Srinu',
    city:'Rajamahendravaram',
    age:20
}

console.log(person)

person.city =  'Pedana'

// delete person.city

console.log(person)

