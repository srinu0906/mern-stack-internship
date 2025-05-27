// functions
// syntax 
// function functionName{
//     // code
// }

// 1)using function keyword
function hello(){
    // console.log("Hello from hello");
    return 1+1;
}

// hello()
console.log(hello())

// 2)variable exppression
const something = function hello(){
    // console.log("Hello from hello");
    return 1+1;
}

console.log(something())


// 3) Anonymous functions
const X = function (){
    // console.log("Hello from hello");
    return 1+1;
}

console.log(X())